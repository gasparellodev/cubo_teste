import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const CheckCircleIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={37}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}

    <path
      d="M11.667 19.3545L16.792 24.4795L25.3337 14.2295"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5003 35.5837C27.9352 35.5837 35.5837 27.9352 35.5837 18.5003C35.5837 9.06546 27.9352 1.41699 18.5003 1.41699C9.06546 1.41699 1.41699 9.06546 1.41699 18.5003C1.41699 27.9352 9.06546 35.5837 18.5003 35.5837Z"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
)

export default CheckCircleIcon
