import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 1.1rem 2.8rem 5.5rem;
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
    color: ${theme.colors.white};
    margin-left: 2.4rem;
    max-width: 15rem;
  `}
`
export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8.9rem;
`

export const Button = styled.button`
  border: none;
  background: none;
  padding-left: 2rem;

  &:hover {
    svg path {
      fill: rgba(0, 173, 210, 0.8);
    }
  }
`
export const Spinner = styled.div`
  ${({ theme }) => css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 0.3rem solid ${theme.colors.borderGray};
    border-top-color: ${theme.colors.base.lightPure};
    animation: spin 0.7s linear infinite;
    margin-left: 1.6rem;

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
