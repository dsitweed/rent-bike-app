import { IconSearch } from "@tabler/icons-react";
import { Button } from "antd";
import Image from "../../assets/images/bike_dashboard.svg";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="flex flex-col gap-6 flex-1 text-primary ml-10">
        <p className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-primary to-[#434343]">
          バイクを借りる、旅行をする
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
              className="h-[61px] px-8 rounded-l-none text-white absolute right-0 bottom-0 bg-primary"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <img className="" src={Image} />
    </div>
  );
};

export default Dashboard;
