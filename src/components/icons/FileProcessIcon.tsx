import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const FileProcessIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={38}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.9998 0.583374H8.74981C7.66684 0.583374 6.62823 1.01358 5.86245 1.77935C5.09668 2.54513 4.66647 3.58374 4.66647 4.66671V21H5.89556L8.53747 14.971C9.72776 12.2576 13.4171 12.1372 14.8666 14.5545L14.9258 14.6525L15.0994 15.0118L18.6274 23.8196L19.3338 22.7783C19.6003 22.3191 19.9659 21.9251 20.4038 21.6249C20.8417 21.3247 21.3411 21.1259 21.8655 21.0429L21.9757 21.0266L22.3514 21H26.5062C27.4069 21.0005 28.2742 21.341 28.9345 21.9536C29.5948 22.5662 29.9994 23.4056 30.0673 24.3037C30.1351 25.2018 29.8613 26.0925 29.3006 26.7973C28.7398 27.5022 27.9335 27.9693 27.0431 28.105L26.937 28.1214L26.5756 28.1459H24.4523L21.0529 33.4603C19.6972 35.8858 16.2529 35.8634 14.8728 33.5481L14.8156 33.4542L14.6461 33.103L11.6612 25.6448L11.502 26.0082C11.2632 26.553 10.8922 27.0295 10.4227 27.3946C9.95315 27.7597 9.39989 28.0018 8.8131 28.0989L8.69876 28.1173L8.30472 28.1459H4.66647V37.3334C4.66647 38.4163 5.09668 39.455 5.86245 40.2207C6.62823 40.9865 7.66684 41.4167 8.74981 41.4167H33.2498C34.3328 41.4167 35.3714 40.9865 36.1372 40.2207C36.9029 39.455 37.3331 38.4163 37.3331 37.3334V16.9167H25.0831C24.0016 16.9167 22.9642 16.4876 22.1987 15.7236C21.4331 14.9596 21.002 13.9231 20.9998 12.8415V0.583374ZM25.0831 13.8542C24.8124 13.8542 24.5527 13.7467 24.3613 13.5552C24.1699 13.3638 24.0623 13.1041 24.0623 12.8334V1.60421L36.3123 13.8542H25.0831ZM7.22876 23.0417H2.11439L1.9041 23.056L1.88368 23.0601C1.50321 23.1195 1.15911 23.3202 0.919952 23.622C0.680797 23.9238 0.564147 24.3047 0.593249 24.6887C0.622351 25.0727 0.795067 25.4316 1.07698 25.6939C1.35889 25.9563 1.7293 26.1028 2.11439 26.1042H8.22918L8.45581 26.0879L8.48031 26.0838C8.73203 26.0423 8.9694 25.9386 9.17085 25.7821C9.3723 25.6255 9.53145 25.4212 9.63385 25.1875L11.7449 20.3651L16.5163 32.2782L16.6163 32.4844L16.6266 32.5048C16.7672 32.737 16.9671 32.9276 17.2056 33.0571C17.4442 33.1866 17.7129 33.2503 17.9842 33.2418C18.2555 33.2333 18.5197 33.1528 18.7497 33.0086C18.9796 32.8644 19.1671 32.6616 19.293 32.4211L23.3334 26.1042H26.5062L26.7165 26.0899L26.7369 26.0858C27.1174 26.0264 27.4615 25.8257 27.7006 25.5239C27.9398 25.2221 28.0564 24.8412 28.0273 24.4572C27.9982 24.0732 27.8255 23.7143 27.5436 23.452C27.2617 23.1896 26.8913 23.0431 26.5062 23.0417H22.4228L22.2064 23.056L22.186 23.0601C21.9513 23.0969 21.7284 23.1879 21.535 23.3257C21.3415 23.4635 21.1827 23.6445 21.0713 23.8543L18.1578 28.1418L13.2313 15.8346L13.1292 15.6243L13.1169 15.6039C12.971 15.365 12.7624 15.1707 12.5137 15.0421C12.265 14.9134 11.9859 14.8555 11.7066 14.8744C11.4273 14.8933 11.1585 14.9885 10.9295 15.1495C10.7005 15.3105 10.52 15.5312 10.4076 15.7877L7.22876 23.0417ZM8.22918 26.1042H4.66647H8.22918Z" fill="#247BA0"/>
  </svg>
)

export default FileProcessIcon



