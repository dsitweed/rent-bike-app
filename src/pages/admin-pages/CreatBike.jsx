import { Button, Input } from "antd";
import { colors } from "../../assets/styles/styles";
import { CameraFilled, PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { supabase } from "../../plugins/supabase";
import { useState } from "react";

export default function CreateBike() {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(0.0);
  const [bike_area, set_bike_area] = useState('');
  const [bike_capacity, set_bike_capacity] = useState(0.0);
  const [plate_number, set_plate_number] = useState('');
  const [tank_capacity, set_tank_capacity] = useState(0.0);
  const [fuel_consumption, set_fuel_consumption] = useState('');

  async function createBike () {
    const formData = {
      name: 'test bike',
      price: price,
      bike_area: bike_area,
      bike_capacity: bike_capacity,
      brand: brand,
      plate_number: plate_number,
      tank_capacity: tank_capacity,
      fuel_consumption: fuel_consumption,
      address: 'Ha Noi',
    }
    const { data, error } = await supabase
      .from('bikes')
      .insert(formData)
      .select();

    console.log(data, error);
    // clear
    setBrand('');
    setPrice(0);
    set_bike_area('');
    set_bike_capacity(0);
    set_plate_number('');
    set_tank_capacity(0);
    set_fuel_consumption(0);
  }
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
            <input type="text" className="w-5/12 px-2 rounded-lg h-8" />
            <p>容量:</p>
            <input type="text" className="w-5/12 px-2 rounded-lg h-8" />
          </div>
        </div>
        {/*  */}
        <div className="flex h-8 items-center my-6 text-base">
          <div className="w-1/4 text-end pr-4">
            ブランド:
          </div>
          <div className="flex w-full justify-between items-center">
            <input type="text" className="w-5/12 px-2 rounded-lg h-8" value={brand} onChange={(e) => setBrand(e.target.value)}/>
            <p>燃費:</p>
            <input type="text" className="w-5/12 px-2 rounded-lg h-8" value={fuel_consumption} onChange={(e) => set_fuel_consumption(e.target.value)}/>
          </div>
        </div>
        {/*  */}
        <div className="flex h-8 items-center my-6 text-base">
          <div className="w-1/4 text-end pr-4">
          ボンベ容量:
          </div>
          <div className="flex w-full justify-between items-center">
            <input type="text" className="w-5/12 px-2 rounded-lg h-8" value={tank_capacity} onChange={(e) => set_tank_capacity(e.target.value)}/>
            <p>位置:</p>
            <input type="text" className="w-5/12 px-2 rounded-lg h-8" value={bike_area} onChange={(e) => set_bike_area(e.target.value)}/>
          </div>
        </div>
        <div className="flex h-8 items-center my-6 text-base">
          <div className="w-1/4 text-end pr-4">
            エリア:
          </div>
          <div className="flex w-full justify-between items-center">
            <input type="text" className="w-full px-2 rounded-lg h-8" />
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
            <Button onClick={() => createBike()} style={{ backgroundColor: '#00c3b1', width: '100%'}}>画像をアップロード</Button>
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