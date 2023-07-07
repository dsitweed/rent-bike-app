import { IconSearch } from "@tabler/icons-react";
import { Button } from "antd";
import Image from "../../assets/images/bike_dashboard.svg";

const Dashboard = () => {
  return (
    <div className="flex mt-10">
      <div className="flex flex-col gap-4 flex-1 text-primary ml-10">
        <p className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary to-rose-600">
          バイクを借りる、 旅行をする
        </p>
        <p className="text-4xl text-primary opacity-90">
          最寄りのエリアであなたの旅に
          <br />
          最適なレンタルバイクを見つけます。
        </p>
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IconSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-lg text-primary border border-primary rounded-lg outline-none"
              placeholder="Hoan Kiem, Ha noi"
              required
            />
            <Button
              type="submit"
              className="text-white absolute right-2.5 bottom-3.5 bg-primary"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <img className="flex-1 h-[500px]" src={Image} />
    </div>
  );
};

export default Dashboard;
