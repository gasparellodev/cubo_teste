import { ReactElement, cloneElement } from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName?: string
}

const ActiveLink = ({
  children,
  activeClassName = 'active',
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter()

  const className =
    asPath === rest.href || asPath.startsWith(String(rest.href))
      ? activeClassName
      : ''

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}

export default ActiveLink
