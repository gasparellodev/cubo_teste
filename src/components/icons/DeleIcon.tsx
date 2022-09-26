import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const DeleIcon = ({
  title,
  titleId,
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
 
    <path d="M15.5827 1.66667H11.791L10.7077 0.25H5.29102L4.20768 1.66667H0.416016V4.5H15.5827M1.49935 22.9167C1.49935 23.6681 1.72762 24.3888 2.13395 24.9201C2.54028 25.4515 3.09138 25.75 3.66602 25.75H12.3327C12.9073 25.75 13.4584 25.4515 13.8647 24.9201C14.2711 24.3888 14.4993 23.6681 14.4993 22.9167V5.91667H1.49935V22.9167Z" fill="#FF3F3F"/>
  </svg>
)

export default DeleIcon