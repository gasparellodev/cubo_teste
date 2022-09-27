import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import * as Button from 'components/Button/styles'

export const Wrapper = styled.div`
  min-height: 60vh;
`

export const NavBarWrapper = styled.div`
  margin-bottom: 8rem;
`

export const Form = styled.div`
  margin-bottom: 8rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
export const TextAreaWrraperFull = styled.div`
  width: 100%;
  :first-of-type div {
    max-width: unset;
    background-color: ${theme.colors.white};
  }
`

export const LabelTextArea = styled.p`
  font-size: ${theme.font.content.regular};
  color: ${theme.colors.black};
  margin: 20px 0;
`

export const TextAreaWrrapermMid1 = styled.div`
  width: 48%;
  div {
    max-width: unset;
    background-color: ${theme.colors.white};
  }
`
export const TextAreaWrrapermMid2 = styled.div`
  width: 48%;
  display: flex;
  align-items: flex-end;
    justify-content: space-between;
    span{
      width: 31%;
    }
  div {
    max-width: unset;
    background-color: ${theme.colors.white};
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;

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
export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 3rem;
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: ${theme.colors.black};
  font-size: ${theme.font.content.regular};
  margin-top: 7rem;
`


export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.regular};
    margin-top: ${theme.spacings.xsmall};
    line-height: 1.1rem;
    position: absolute;
    right: 0;
  `}
`

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  //position: absolute;
  //bottom: -9rem;
  display: flex;
  justify-content: center;

  button{
    width: unset;
  }
`