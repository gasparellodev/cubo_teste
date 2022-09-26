import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  padding: 3.2rem 0 5rem;
  display: flex;
  justify-content: center;
`

// export const Title = styled.h1`
//   ${({ theme }) => css`
//     font-weight: ${theme.font.weights.semiBold};
//     font-size: 3.2rem;
//     line-height: 4.8rem;
//     color: ${theme.colors.white};
//     margin-top: 6.4rem;
//     margin-bottom: ${theme.spacings.xxxsmall};
//   `}
// `

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.small};
    color: ${theme.colors.black};
    line-height: 2.1rem;
    max-width: 45%;
    margin: 1%;
  `}
`

export const BoxImg = styled.div`
  width: 45%;
  margin: 1%;
  min-height: 20rem;
  background-color: red;
`
