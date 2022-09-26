import Container from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.sm} 0;
    background-color: ${theme.colors.footerColor};
    min-height: 200px;
    //position: absolute;
    width: 100%;
    //bottom: 0;
    
    z ${Container} {
      max-width: calc(${theme.grid.container} + 20rem);
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.xsmall};
    line-height: 1.8rem;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${theme.colors.base.lightPure};
  `}
`
