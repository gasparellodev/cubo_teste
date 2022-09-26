import styled, { css } from 'styled-components'

export const MapButton = styled.a`
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  color: #fff;
  border-bottom: 3px solid #fff;
`
export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.xlarge};
    font-weight: 600;
    line-height: 32px;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    margin: 0.8rem 0 3.2rem;
    font-weight: 500;
    font-size: ${theme.font.content.regular};
    line-height: 24px;
    max-width: 75rem;
  `}
`

export const CausesContainer = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  margin-right: 40px;
`
