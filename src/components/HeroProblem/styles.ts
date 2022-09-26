import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  padding: 0 0 5rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.semiBold};
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.small};
    line-height: 2.1rem;
    max-width: 89rem;
  `}
`
