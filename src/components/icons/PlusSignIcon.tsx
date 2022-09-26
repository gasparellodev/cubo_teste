import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const PlusSignIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M12.5 5v14M5.5 12h14"
      stroke="#00ADD2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default PlusSignIcon
