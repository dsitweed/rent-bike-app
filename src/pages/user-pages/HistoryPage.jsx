import { Space, Tag } from "antd";
import {} from "react";

const HistoryPage = () => {
  return (
    <div className="p-4 flex h-full gap-4 flex-col">
      <Space size={[0, "small"]} wrap>
        <Tag className="px-3 py-2 text-base text-center bg-blue-500 text-secondary">
          オーダー
        </Tag>
        <Tag className="px-3 py-2 text-base text-center bg-yellow-500 text-secondary">
          借りる
        </Tag>
        <Tag className="px-3 py-2 text-base text-center bg-emerald-500 text-secondary">
          完了
        </Tag>
        <Tag className="px-3 py-2 text-base text-center bg-red-500 text-secondary">
          キャンセル
        </Tag>
        <Tag className="px-3 py-2 text-base text-center bg-orange-500 text-secondary">
          時代遅れ
        </Tag>
      </Space>
      <div className="flex-1 w-full bg-primary rounded-lg overflow-auto">
        <div className="flex flex-col p-4 gap-4">
          {[...Array(12).keys()].map((item, index) => (
            <div className="px-8 flex justify-between gap-8 " key={index}>
              <div className="px-4 py-3 flex-1 bg-secondary text-primary rounded-full flex justify-between">
                <p>Order 1</p>
                <span className="-my-3 -mr-4 px-4 py-3 rounded-full bg-emerald-500 text-secondary">
                  時代遅れ
                </span>
              </div>
              <button className="shadow rounded-lg px-12 py-3 bg-secondary text-primary">
                ショー
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
