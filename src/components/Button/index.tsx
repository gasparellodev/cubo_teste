import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import CheckedIcon from 'components/icons/CheckedIcon'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: ReactNode
  fullWidth?: boolean
  as?: React.ElementType
  minimal?: boolean
  isLoading?: boolean
  checked?: boolean
} & ButtonTypes

const Button = ({
  children,
  fullWidth = false,
  minimal = false,
  isLoading = false,
  checked = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      fullWidth={fullWidth}
      minimal={minimal}
      checked={checked}
      {...props}
    >
      {isLoading ? (
        <S.Spinner data-testid="is-loading" />
      ) : (
        <>
          {checked && <CheckedIcon />}
          {children}
        </>
      )}
    </S.Wrapper>
  )
}

export default Button
