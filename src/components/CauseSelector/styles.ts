import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 2.4rem 4rem;
    background: ${theme.colors.base.blueDark};
    border-radius: ${theme.border.radius.large};
    transition: ${theme.transition.default};
  `}
`

export const TopRowWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.base.lightPure};
    font-weight: ${theme.font.weights.bold};
    transition: ${theme.transition.default};
  `}
`

export const Spinner = styled.div`
  ${({ theme }) => css`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    border: 0.3rem solid ${theme.colors.borderGray};
    border-top-color: ${theme.colors.base.lightPure};
    animation: spin 0.7s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(359deg);
      }
    }
  `}
`

export const BottomRowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.4rem;
`

export const CauseTypeWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0.8rem 1rem;
    border-radius: 0.4rem;
    width: 22.7rem;
    background: ${theme.colors.base.whiteLine};
  `}
`

export const CauseTypeText = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;

  svg {
    margin-right: 1rem;
    flex-shrink: 0;
  }
`

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    padding: 0.8rem 1.6rem;
    background: none;
    border: none;
    height: 3.7rem;
    cursor: pointer;

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
