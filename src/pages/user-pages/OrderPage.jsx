import { IconTrash } from "@tabler/icons-react";
import { DatePicker, Form, Select, Tag } from "antd";
import {} from "react";

const OrderPage = () => {
  return (
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
                <p>{"51 P. Lương Khánh Thiện, Tương Mai, Hoàng Mai, Hà Nội"}</p>
              </div>
              <button className="h-12 mr-4 p-3 bg-red-500 text-white rounded-lg">
                <IconTrash />
              </button>
            </div>
          ))}
        </div>
        <Form layout="horizontal" size="large" className="mt-12">
          <Form.Item label="スタート">
            <DatePicker showTime className="w-full" />
          </Form.Item>
          <Form.Item label="エンド">
            <DatePicker showTime className="w-full" />
          </Form.Item>
          <Form.Item label="場所">
            <Select />
          </Form.Item>
        </Form>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-full bg-primary text-white rounded-lg flex h-fit flex-col gap-4 px-8 py-4">
          <p className="text-center text-2xl font-bold">領収書</p>
          <div className="grid grid-cols-2 text-lg font-bold">
            <p>単価</p>
            <p>{`50000₫/時間`}</p>
            <p>合計時間</p>
            <p>{8}時間</p>
            <p>合計金額</p>
            <p>{400000}₫</p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-3 rounded-lg text-secondary bg-rose-600 text-2xl">
              キャンセル
            </button>
            <button className="px-4 py-3 rounded-lg text-secondary bg-emerald-500 text-2xl">
              オーダ
            </button>
          </div>
        </div>
        {true && (
          <span className="rounded-lg p-4 bg-red-600 text-white text-xl">
            現在、その場所には注文の車両がありません
          </span>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
