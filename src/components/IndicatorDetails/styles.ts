import { TagProps } from 'components/Tag'
import styled, { css } from 'styled-components'

import { colorModifiers } from 'components/Tag/styles'

type WrapperProps = Pick<TagProps, 'color'>

export const Wrapper = styled.article<WrapperProps>`
  width: 100%;

  ${({ theme, color }) => css`
    ${Title} {
      ${colorModifiers[color!](theme)}
    }
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-bottom: 0.5rem;
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.7rem;
  white-space: nowrap;
`

export const Content = styled.ul``

export const Item = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  b,
  strong {
    font-weight: bold;
  }
`
