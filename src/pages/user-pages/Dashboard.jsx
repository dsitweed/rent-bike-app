import { Input } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex mt-10">
      <div className="flex flex-col gap-4 flex-1 text-primary ml-10">
        <p className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary to-rose-600">
          バイクを借りる、 旅行をする
        </p>
        <p className="text-lg text-primary opacity-90"></p>
        <Input.Search
          enterButton
          size="large"
          className="max-w-xs"
          placeholder="Hoan Kiem, Ha Noi"
        />
      </div>
      <img src="" />
    </div>
  );
};

export default Dashboard;
