import { Input } from "antd";
import { colors } from "../../assets/styles/styles";
import { SearchOutlined } from "@ant-design/icons";

const orderStatus = [
  {
    status: "オーダー",
    bgColor: "lightskyblue",
  },
  {
    status: "借りる",
    bgColor: "yellow",
  },
  {
    status: "完了",
    bgColor: "green",
  },
  {
    status: "キャセル",
    bgColor: "red",
  },
  {
    status: "時代遅れ",
    bgColor: "orange",
  },
];

const listOrders = [
  {
    name: "オーダー1",
    status: "オーダー",
  },
  {
    name: "オーダー2",
    status: "キャセル",
  },
  {
    name: "オーダー3",
    status: "借りる",
  },
  {
    name: "オーダー4",
    status: "時代遅れ",
  },
  {
    name: "オーダー5",
    status: "完了",
  },
];

export default function OrderList() {
  return (
    <div className="h-full">
      <div
        className="p-2 rounded-md text-white font-bold text-2xl text-center"
        style={{ backgroundColor: colors.brown }}
      >
        オーダーリスト
      </div>
      <div className="my-3 flex justify-between">
        <div className="flex gap-2">
          {orderStatus.map((item) => (
            <span
              key={item.status}
              className="flex items-center text-base px-4 rounded-3xl border border-black"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.status}
            </span>
          ))}
        </div>
        <Input
          className="outline-none border-2 rounded-3xl py-2 px-5 w-80"
          suffix={
            <SearchOutlined
              style={{ color: colors.brownLight, fontSize: 20 }}
            />
          }
        />
      </div>

      {/* table */}
      <div
        style={{ backgroundColor: colors.brownLight }}
        className="rounded-xl py-5 px-10 flex flex-col gap-y-4 h-5/6"
      >
        {listOrders.map((item) => {
          const status = orderStatus.filter((i) => i.status === item.status);
          const bgColor = status[0].bgColor;

          return (
            <div key={item.name} className="flex justify-between text-base">
              <div className="flex w-full">
                <div
                  style={{ width: "50vw" }}
                  className="bg-white rounded-3xl px-4 py-1 text-center z-10 sm:w-[450px]"
                >
                  {item.name}
                </div>
                <div
                  style={{ backgroundColor: bgColor, left: "52vw" }}
                  className="absolute w-28 p-1 pr-4 text-end rounded-r-3xl"
                >
                  {item.status}
                </div>
              </div>
              <div>
                <div className="w-24 text-center bg-white rounded-lg">
                  ショー
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
