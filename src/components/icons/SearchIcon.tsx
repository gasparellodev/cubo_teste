import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const SearchIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}

    <path
      d="M20.1253 20.125L15.8262 15.8183L20.1253 20.125ZM18.2087 10.0625C18.2087 12.2229 17.3504 14.2949 15.8228 15.8225C14.2952 17.3501 12.2232 18.2084 10.0628 18.2084C7.90242 18.2084 5.83049 17.3501 4.30285 15.8225C2.77521 14.2949 1.91699 12.2229 1.91699 10.0625C1.91699 7.90211 2.77521 5.83019 4.30285 4.30255C5.83049 2.77491 7.90242 1.91669 10.0628 1.91669C12.2232 1.91669 14.2952 2.77491 15.8228 4.30255C17.3504 5.83019 18.2087 7.90211 18.2087 10.0625V10.0625Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export default SearchIcon
