import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import * as TextFieldStyles from 'components/TextField/styles'

export const Wrapper = styled.main`
  min-height: 100vh;
  position: relative;
  /* background: url('/images/bg.svg') no-repeat;
  background-size: cover; */
  background-color: #D5D5D5;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`

export const LoginContent = styled.div`
  max-width: 61rem;
  width: 100%;
  background-color: #fff;
  margin: auto;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 33px rgba(0, 0, 0, 0.25);
`

export const HeadingWrapper = styled.div`
  max-width: 43.1rem;
  width: 100%;
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.xlarge};
    line-height: 3.2rem;
    margin-top: 1.6rem;
    max-width: 55rem;
  `}
`

export const Form = styled.form<{ error: boolean }>`
  width: 100%;
  max-width: 44.5rem;
  margin-top: 2.4rem;
  margin-bottom: 6rem;
  position: relative;

  ${TextFieldStyles.Wrapper} + ${TextFieldStyles.Wrapper} {
    margin-top: 2.4rem;
  }

  ${ButtonStyles.Wrapper} {
    //margin-top: 4rem;
  }
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
  position: absolute;
  bottom: -9rem;
  display: flex;
  justify-content: center;

  button{
    width: unset;
  }
`
