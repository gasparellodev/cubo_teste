import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${theme.colors.base.whiteLine};
  `}
`

export const CategoryWrapper = styled.article`
  & + & {
    margin-top: 6rem;
  }
`
