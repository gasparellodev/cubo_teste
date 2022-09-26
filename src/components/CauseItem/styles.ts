import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 4.6rem 2.8rem 5.5rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.regular};
    line-height: 2.4rem;
    color: ${theme.colors.base.lightPure};
    margin-left: 2.4rem;
    max-width: 15rem;
  `}
`
export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  gap: 13rem;
`

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    padding: 0.8rem 1.6rem;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 0.8rem;
      padding: 0.2rem;
      background: ${theme.colors.brand.gradientPrimary01};
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    &:hover {
      svg {
        path {
          fill: ${theme.colors.base.lightPure};
        }
      }

      span {
        background: ${theme.colors.base.lightPure};
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }
    }
  `}
`

export const ButtonLabel = styled.span`
  ${({ theme }) => css`
    margin-right: 0.8rem;
    font-weight: 600;
    font-size: ${theme.font.content.small};
    background: ${theme.colors.brand.gradientPrimary01};
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  `}
`
