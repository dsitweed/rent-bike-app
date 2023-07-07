import { Card, Input, Select } from "antd";
import {} from "react";

const FilterPage = () => {
  return (
    <div className="flex flex-col mt-2 px-8 gap-4">
      <div className="flex justify-between">
        <Input.Search
          enterButton
          size="large"
          className="max-w-xs"
        ></Input.Search>
        <div className="flex gap-2">
          <Select
            size="large"
            className="text-primary min-w-[144px]"
            placeholder="ブランド"
          />
          <Select
            size="large"
            className="text-primary min-w-[144px]"
            placeholder="値段"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {[...Array(12).keys()].map((item, index) => (
          <Card
            key={index}
            hoverable
            cover={
              <img
                className="border-b border-primary"
                src="https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg"
              />
            }
          >
            <Card.Meta
              className="text-lg"
              style={{ textAlign: "center" }}
              title="Hoan Kiem"
              description={`値段: ${20000}₫/時間`}
            ></Card.Meta>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
