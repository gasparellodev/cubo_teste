import ActiveLink from 'components/ActiveLink'

import * as S from './styles'

type Link = {
  id: number
  href: string
  target?: string
  label: string
  disabled?: boolean
}

export type NavBarProps = {
  links: Link[]
  variant?: 'large' | 'small'
}

const NavBar = ({ links, variant = 'large' }: NavBarProps) => {
  return (
    <S.Wrapper>
      <S.Items variant={variant}>
        {links.map(({ id, href, label, target, disabled }) => (
          <S.Item key={id} variant={variant} disabled={disabled}>
            <ActiveLink href={disabled ? '#' : href} passHref scroll={false}>
              <S.Anchor target={target} variant={variant} disabled={disabled}>
                {label}
              </S.Anchor>
            </ActiveLink>
          </S.Item>
        ))}
      </S.Items>
    </S.Wrapper>
  )
}
export default NavBar
