import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const Arrow = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={12}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m11.68 4.793-4.364-4a1.162 1.162 0 0 0-1.542 0 .942.942 0 0 0 0 1.414L8.278 4.5H1.09C.488 4.5 0 4.946 0 5.5c0 .554.488 1 1.091 1h7.187L5.776 8.794a.942.942 0 0 0 0 1.414c.426.39 1.116.39 1.543 0l4.363-4a.943.943 0 0 0-.002-1.414Z"
      fill="#00C5D2"
    />
  </svg>
)

export default Arrow
