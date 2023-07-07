import { Button, Input } from "antd";
import { colors } from "../../assets/styles/styles";
import { CameraFilled, PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

export default function CreateBike() {
  return (
    <div className="flex justify-between gap-2">
      <div style={{ backgroundColor: colors.brownLight}}
        className="basis-2/3 px-6 py-2 rounded-lg"
      >
        <div className="w-fit mx-auto p-2 border">
          新しいバイク
        </div>

        <div className="flex h-8 items-center my-6 text-base">
          <div className="w-1/4 text-end pr-4">
            プロダクトのID:
          </div>
          <div className="flex w-full justify-between items-center">
            <input type="text" className="w-5/12 rounded-lg h-8"/>
            <p>容量:</p>
            <input type="text" className="w-5/12 rounded-lg h-8"/>
          </div>
        </div>
        {/*  */}
        <div className="flex h-8 items-center my-6 text-base">
          <div className="w-1/4 text-end pr-4">
            ブランド:
          </div>
          <div className="flex w-full justify-between items-center">
            <input type="text" className="w-5/12 rounded-lg h-8"/>
            <p>燃費:</p>
            <input type="text" className="w-5/12 rounded-lg h-8"/>
          </div>
        </div>
        {/*  */}
        <div className="flex h-8 items-center my-6 text-base">
          <div className="w-1/4 text-end pr-4">
          ボンベ容量:
          </div>
          <div className="flex w-full justify-between items-center">
            <input type="text" className="w-5/12 rounded-lg h-8"/>
            <p>位置:</p>
            <input type="text" className="w-5/12 rounded-lg h-8"/>
          </div>
        </div>
        <div className="flex h-8 items-center my-6 text-base">
          <div className="w-1/4 text-end pr-4">
            エリア:
          </div>
          <div className="flex w-full justify-between items-center">
            <input type="text" className="w-full rounded-lg h-8"/>
          </div>
        </div>
        <div className="flex h-auto my-6 text-base items-start">
          <div className="w-1/4 text-end pr-4 h-auto">
            イメージ:
          </div>
          <div className="flex flex-col w-full gap-2 justify-between items-center">
            <Input suffix={<CameraFilled />} />
            <Input suffix={<CameraFilled />} />
            <Input suffix={<CameraFilled />} />
            <Input suffix={<CameraFilled />} />
            <Button style={{ backgroundColor: '#00c3b1', width: '100%'}}>画像をアップロード</Button>
          </div>
        </div>
      </div>

      {/* right */}
      <div
        className="basis-1/2"
      >
        <div className="px-6 py-10 rounded-lg mb-2" style={{ backgroundColor: colors.brown}}>
          <div className="flex items-center gap-10 justify-center">
            <PlusCircleOutlined style={{ fontSize: 60}}/>
            <Button style={{ backgroundColor: 'lightgreen'}} className="border-none px-8 h-12 text-lg">新しいバイク</Button>
          </div>
          <div className="flex items-center gap-10 justify-center my-10">
            <CloseCircleOutlined style={{ fontSize: 60}}/>
            <Button style={{ backgroundColor: 'red'}} className="border-none px-8 h-12 text-lg">新しいバイク</Button>
          </div>
        </div>
        <img className="w-auto object-contain" src="https://superbikefactory.co.uk/media/wysiwyg/Bitmap.png" alt="" />
      </div>
    </div>
  );
}