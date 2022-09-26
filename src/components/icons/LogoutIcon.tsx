import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const LogoutIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m9.625 4-.881.881.987.994H4.625v1.25h5.106l-.987.988.881.887 2.5-2.5-2.5-2.5Zm-7.5-1.875H6.5V.875H2.125c-.688 0-1.25.563-1.25 1.25v8.75c0 .688.563 1.25 1.25 1.25H6.5v-1.25H2.125v-8.75Z"
      fill="#fff"
    />
  </svg>
)

export default LogoutIcon
