import { IconTrash } from "@tabler/icons-react";
import { DatePicker, Select, Tag, TimePicker } from "antd";
import {} from "react";
import { colors } from "../../assets/styles/styles";

const ManageOrder = () => {
  return (
    <div>
      <div
        className="rounded-lg p-1 text-white text-2xl font-bold text-center"
        style={{ backgroundColor: colors.brown }}
      >
        オーケー!
      </div>
      <div className="grid grid-cols-2 px-8 py-8 gap-10">
        <div>
          <div className="flex flex-col gap-4 max-h-80 overflow-auto">
            {[...Array(12).keys()].map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between gap-4"
              >
                <img
                  className="h-32 w-48 shadow"
                  src="https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg"
                />
                <div className="flex h-32 flex-col justify-between">
                  <div>
                    <p className="text-lg font-bold">{"SHMODE_1234"}</p>
                    <div>
                      <Tag className="text-center bg-emerald-500 text-secondary">
                        利用可能
                      </Tag>
                    </div>
                  </div>
                  <p>
                    {"51 P. Lương Khánh Thiện, Tương Mai, Hoàng Mai, Hà Nội"}
                  </p>
                </div>
                <button className="h-12 mr-4 p-3 bg-red-500 text-white rounded-lg">
                  <IconTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-3 gap-10 w-full lg:w-4/5">
            <p className="font-bold text-lg text-center">スタート</p>
            <DatePicker format={"DD/MM/YYYY"} />
            <TimePicker />
          </div>
          <div className="grid grid-cols-3 gap-10 w-full lg:w-4/5">
            <p className="font-bold text-lg text-center">エンド</p>
            <DatePicker format={"DD/MM/YYYY"} />
            <TimePicker />
          </div>
          <div className="grid grid-cols-3 gap-10 w-full lg:w-4/5">
            <p className="font-bold text-lg text-center">場所</p>
            <Select className="col-span-2" />
          </div>
          <div
            className="w-full lg:w-4/5 text-white rounded-lg flex h-fit flex-col gap-4 px-8 py-4"
            style={{ backgroundColor: colors.brown }}
          >
            <div className="grid grid-cols-2 text-3xl font-bold p-6">
              <p>合計</p>
              <p>{`400,000`}VND</p>
            </div>
          </div>
          {false && (
            <span className="rounded-lg p-4 bg-red-600 text-white text-xl">
              現在、その場所には注文の車両がありません
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-20 mt-6">
        <button className="px-4 py-3 rounded-lg text-secondary bg-rose-600 text-2xl">
          キャンセル
        </button>
        <button className="px-4 py-3 rounded-lg text-secondary bg-emerald-500 text-2xl">
          オーダ
        </button>
      </div>
    </div>
  );
};

export default ManageOrder;
