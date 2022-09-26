import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const ModifyIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={44}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}

    <path
      d="M28.3394 10.6233L31.9145 14.4069M30.6384 7.29014L20.9715 17.5256C20.4721 18.0537 20.1314 18.7266 19.9925 19.4594L19.0996 24.192L23.5693 23.2448C24.2613 23.0982 24.896 22.739 25.3956 22.21L35.0625 11.9745C35.353 11.6669 35.5834 11.3017 35.7406 10.8999C35.8978 10.498 35.9787 10.0673 35.9787 9.63231C35.9787 9.19732 35.8978 8.7666 35.7406 8.36473C35.5834 7.96286 35.353 7.59771 35.0625 7.29014C34.772 6.98256 34.4271 6.73857 34.0476 6.57211C33.668 6.40565 33.2613 6.31998 32.8504 6.31998C32.4396 6.31998 32.0328 6.40565 31.6533 6.57211C31.2737 6.73857 30.9289 6.98256 30.6384 7.29014V7.29014Z"
      stroke="#247BA0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.6024 27.7665V33.1282C32.6024 34.0762 32.2467 34.9854 31.6136 35.6557C30.9805 36.3261 30.1218 36.7026 29.2265 36.7026H10.6591C9.76375 36.7026 8.90508 36.3261 8.27198 35.6557C7.63888 34.9854 7.2832 34.0762 7.2832 33.1282V13.4686C7.2832 12.5206 7.63888 11.6114 8.27198 10.9411C8.90508 10.2707 9.76375 9.89413 10.6591 9.89413H15.7229"
      stroke="#247BA0"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ModifyIcon
