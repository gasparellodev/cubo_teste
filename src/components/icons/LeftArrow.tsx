import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
  color?: string
}

const LeftArrow = ({
  title,
  titleId,
  //color = '#BABABA',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={16}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.0068 4.23767L6.22815 13.0164L15.0068 21.795L13.2511 25.3065L0.960938 13.0164L13.2511 0.726196L15.0068 4.23767Z" fill="black"/>
  </svg>
)

export default LeftArrow