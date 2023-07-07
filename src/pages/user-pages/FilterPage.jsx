import { Card, Input, Pagination, Select } from "antd";
import { useEffect, useState } from "react";
import { supabase } from "../../plugins/supabase";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const FilterPage = () => {
  const navigate = useNavigate();
  const [bikeList, setBikeList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase.from("bikes").select("*");
      if (error) {
        alert(error);
      } else {
        setBikeList(data);
        if (searchParams.get("keyword")) {
          setDisplayList(
            data.filter((item) =>
              item.bike_area
                .toLowerCase()
                .includes(searchParams.get("keyword").toLowerCase())
            )
          );
        } else {
          setDisplayList(data);
        }
      }
      const { data: brandData, error: brandError } = await supabase
        .from("brands_view")
        .select("*");
      if (brandError) {
        alert(brandError);
      } else {
        setBrandList(
          brandData.map((item) => ({ label: item.brand, value: item.brand }))
        );
      }
    };
    load();
    return () => {};
  }, []);

  return (
    <div className="flex flex-col mt-2 px-8 gap-4">
      <div className="flex justify-between">
        <Input.Search
          enterButton
          size="large"
          className="max-w-xs"
          defaultValue={searchParams.get("keyword")}
          onSearch={(e) => {
            setDisplayList(
              bikeList.filter((item) =>
                item.bike_area.toLowerCase().includes(e.toLowerCase())
              )
            );
          }}
        ></Input.Search>
        <div className="flex gap-2">
          <Select
            size="large"
            className="text-primary min-w-[144px]"
            placeholder="ブランド"
            options={brandList}
            onChange={(e) => {
              console.log(e);
              setDisplayList(bikeList.filter((item) => item.brand === e));
            }}
          />
          <Select
            size="large"
            className="text-primary min-w-[160px]"
            placeholder="値段"
            options={[
              {
                label: "0~50000₫",
                value: 0,
              },
              {
                label: "50000~100000₫",
                value: 1,
              },
              {
                label: "100000₫以上",
                value: 2,
              },
            ]}
            onChange={(e) => {
              switch (e) {
                case 0:
                  setDisplayList(
                    bikeList.filter(
                      (item) => item.price >= 0 && item.price < 50000
                    )
                  );
                  break;
                case 1:
                  setDisplayList(
                    bikeList.filter(
                      (item) => item.price >= 50000 && item.price < 100000
                    )
                  );
                  break;
                default:
                  setDisplayList(
                    bikeList.filter((item) => item.price >= 100000)
                  );
                  break;
              }
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {displayList
          .slice((currentPage - 1) * 8, currentPage * 8)
          .map((item, index) => (
            <Card
              key={index}
              hoverable
              cover={
                <img
                  className="border-b border-primary"
                  src="https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg"
                />
              }
              onClick={() => navigate(`/bike/${item.id}`)}
            >
              <Card.Meta
                className="text-lg"
                style={{ textAlign: "center" }}
                title={item.bike_area}
                description={`値段: ${item.price}₫/時間`}
              ></Card.Meta>
            </Card>
          ))}
      </div>
      <div className="flex py-2 justify-end">
        <Pagination
          current={currentPage}
          onChange={(e) => {
            setCurrentPage(e);
          }}
          defaultPageSize={8}
          total={displayList.length}
        />
      </div>
    </div>
  );
};

export default FilterPage;
