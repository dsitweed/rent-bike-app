import { Spin, Tag } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../plugins/supabase";
const BikePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [bike, setBike] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("bikes")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        alert(error);
      } else {
        setBike(data);
      }

      setLoading(false);
    };
    load();
    return () => {};
  }, [id]);

  return loading || !bike ? (
    <Spin></Spin>
  ) : (
    <div className="px-16 py-8 flex h-full gap-10">
      <div>
        <img
          className="h-64 w-96 shadow"
          src="https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg"
        />
        <div className="w-96 grid grid-cols-3 gap-4 mt-4">
          <img
            className="shadow"
            src="https://bd.gaadicdn.com/processedimages/honda/nx-200/640X309/nx-200619f824a29a46.jpg"
          />
          <img
            className="shadow"
            src="https://bd.gaadicdn.com/processedimages/honda/nx-200/640X309/nx-200619f824a29a46.jpg"
          />
          <img
            className="shadow"
            src="https://bd.gaadicdn.com/processedimages/honda/nx-200/640X309/nx-200619f824a29a46.jpg"
          />
        </div>
      </div>
      <div className="flex-1 bg-secondary px-6 py-4 pb-8 rounded-lg">
        <div className="h-full flex flex-col justify-between text-primary">
          <div>
            <Tag className="px-3 py-2 bg-emerald-500 text-base text-secondary">
              在庫あり
            </Tag>
          </div>
          <div className="flex flex-row justify-between py-2">
            <p className="text-4xl font-bold">{bike?.name}</p>
            <p className="text-4xl">{`${bike?.price}₫/時間`}</p>
          </div>
          <div className="flex-1 text-xl py-8 flex">
            <div className="w-48">
              <p>プロダクトのID:</p>
              <p>ブランド:</p>
              <p>位置:</p>
              <p>容量:</p>
              <p>燃費:</p>
              <p>ボンベ容量:</p>
            </div>
            <p className="flex-1">
              <p>{bike?.plate_number}</p>
              <p>{bike?.brand}</p>
              <p>{bike?.address}</p>
              <p>{bike?.tank_capacity}</p>
              <p>{bike?.fuel_consumption}</p>
              <p>{bike?.bike_capacity}</p>
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-3 rounded-lg text-secondary bg-rose-500 text-xl">
              カートを入れる
            </button>
            <button className="px-4 py-3 rounded-lg text-secondary bg-emerald-500 text-xl">
              すぐレンタル
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikePage;
