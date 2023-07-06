import { Button, Card, Carousel, Image, Tag } from "antd";
import React from "react";

const BikePage = () => {
  return (
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
      <Card className="flex-1 bg-secondary">
        <div className="">
          <Tag className="px-4 py-3"></Tag>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-3 rounded-lg text-secondary bg-rose-500 text-2xl">
              カートを入れる
            </button>
            <button className="px-4 py-3 rounded-lg text-secondary bg-emerald-500 text-2xl">
              すぐレンタル
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BikePage;
