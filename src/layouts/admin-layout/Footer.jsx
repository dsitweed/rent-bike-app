import { colors } from '../../assets/styles/styles';
import { FacebookFilled , InstagramFilled, TwitterOutlined } from '@ant-design/icons'

export default function Footer() {
  return (
    <div className="flex p-2 px-10 rounded-3xl" style={{ backgroundColor: colors.brownLight}}>
      <div className="w-1/2 text-base font-bold">
        バイク借り
      </div>
      <div className="w-1/2 flex gap-2">
        <FacebookFilled style={{ fontSize: 20}} />
        <InstagramFilled style={{ fontSize: 20}} />
        <TwitterOutlined style={{ fontSize: 20}} />
      </div>
    </div>
  )
}