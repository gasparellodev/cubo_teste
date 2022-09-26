import styled, { css } from 'styled-components'

import * as Button from 'components/Button/styles'

export const NavBarWrapper = styled.div`
  margin-bottom: 8rem;
`

export const WarningWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  p {
    font-size: 14px;
    font-weight: 500;
    max-width: 46rem;
    text-align: center;
    line-height: 21px;
  }
`

export const ContentWrapper = styled.section`
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

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 5rem;

  & ${Button.Wrapper} {
    display: block;
    width: 34.9rem;
    margin: 0 auto;

    svg {
      margin-left: 27.5rem;
    }

    &:hover:enabled {
      svg path {
        fill: white;
      }
    }
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.content.small};
    font-weight: ${theme.font.weights.light};
    font-style: italic;
    margin: 8rem 0 7rem;
  `}
`

export const ReturnLinkContainer = styled.div`
  margin-top: 5rem;
`

export const ButtonLabel = styled.span`
  white-space: nowrap;

  svg {
    position: absolute;
    left: 10px;
  }
`
