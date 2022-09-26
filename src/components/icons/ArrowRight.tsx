import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const ArrowRight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={15}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
 
    <path d="M0.600778 0.760755C0.296138 1.07721 0.125 1.50635 0.125 1.95382C0.125 2.40128 0.296138 2.83043 0.600778 3.14688L8.64453 11.5L0.600778 19.8531C0.304771 20.1714 0.14098 20.5977 0.144682 21.0401C0.148385 21.4826 0.319285 21.9058 0.620573 22.2187C0.921861 22.5316 1.32943 22.709 1.7555 22.7129C2.18157 22.7167 2.59205 22.5466 2.89853 22.2393L12.0912 12.6931C12.3958 12.3766 12.5669 11.9475 12.5669 11.5C12.5669 11.0525 12.3958 10.6234 12.0912 10.3069L2.89853 0.760755C2.5938 0.444398 2.18054 0.266678 1.74965 0.266678C1.31876 0.266678 0.905511 0.444398 0.600778 0.760755Z" fill="#675D5D"/>

  </svg>
)

export default ArrowRight
 