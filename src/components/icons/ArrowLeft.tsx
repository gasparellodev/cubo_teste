import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const ArrowLeft = ({
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
 
    <path d="M13.7382 0.760755C14.0663 1.07721 14.2506 1.50635 14.2506 1.95382C14.2506 2.40128 14.0663 2.83043 13.7382 3.14688L5.07569 11.5L13.7382 19.8531C14.057 20.1714 14.2334 20.5977 14.2294 21.0401C14.2254 21.4826 14.0413 21.9058 13.7169 22.2187C13.3924 22.5316 12.9535 22.709 12.4946 22.7129C12.0358 22.7167 11.5937 22.5466 11.2637 22.2393L1.36394 12.6931C1.03586 12.3766 0.851563 11.9475 0.851562 11.5C0.851562 11.0525 1.03586 10.6234 1.36394 10.3069L11.2637 0.760755C11.5919 0.444398 12.0369 0.266678 12.5009 0.266678C12.965 0.266678 13.41 0.444398 13.7382 0.760755Z" fill="#675D5D"/>
  </svg>
)

export default ArrowLeft