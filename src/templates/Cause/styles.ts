import styled, { css } from 'styled-components'

export const Hero = styled.section`
  padding: 2rem 0 7.2rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const WrapperTextHero = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.semiBold};
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxxsmall};

    strong {
      font-weight: ${theme.font.weights.bold};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.regular};
    line-height: 2.4rem;
    max-width: 85rem;
  `}
`

export const WrapperAccordions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
`

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    padding: 3rem 0;
    width: 100%;
    border: none;
    background: none;

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
          stroke: ${theme.colors.base.lightPure};
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 0;
    margin-right: 0.8rem;
    font-weight: 700;
    font-size: ${theme.font.content.small};
    background: ${theme.colors.brand.gradientPrimary01};
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    svg {
      margin-right: 10px;
    }
  `}
`
export const Hr = styled.hr`
  ${({ theme }) => css`
    margin: 8rem 0 4rem 0;
    width: 100%;
    height: 0.1rem;
    background: ${theme.colors.base.whiteLine};
    border: none;
  `}
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6.5rem;
`
