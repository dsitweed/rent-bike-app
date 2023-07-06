import { MenuOutlined, UserOutlined } from "@ant-design/icons";

export default function Header() {
  
  return (
    <div className="flex justify-between bg-slate-200 p-2 m-2 rounded-3xl">
      <div className="flex items-center gap-x-5 px-4">
        <MenuOutlined />
        <p>バイク借り</p>
        <p>バイクリスト</p>
        <p>オーダーリスト</p>
      </div>
      <div className="flex items-center gap-x-2">
        <UserOutlined style={{ color: 'white', fontSize: 18}} />
        <p className=" bg-white hover:bg-slate-400 cursor-pointer px-3 rounded-3xl">サインアウト</p>
      </div>
    </div>
  )
}