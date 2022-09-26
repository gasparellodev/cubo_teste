import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import * as TextFieldStyles from 'components/TextField/styles'

export const Wrapper = styled.main`
  min-height: 100vh;
  position: relative;
  background: url('/images/bg-login.svg') no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
`

export const FormContent = styled.div`
  max-width: 55rem;
  width: 100%;
`

export const Anchor = styled.a``

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.xlarge};
    line-height: 3.2rem;
    margin-top: 3.2rem;
  `}
`

export const Form = styled.form`
  width: 100%;
  max-width: 44.5rem;
  margin-top: 6.1rem;
  margin-bottom: 11.6rem;
  position: relative;

  ${TextFieldStyles.Wrapper} + ${TextFieldStyles.Wrapper} {
    margin-top: 2.4rem;
  }

  ${ButtonStyles.Wrapper} {
    margin-top: 4rem;
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

export const InstructionContent = styled.div`
  margin-bottom: 18.2rem;
  max-width: 61rem;
  width: 100%;
`

export const Email = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.brand.primary01};
    font-size: ${theme.font.content.xlarge};
    margin: 3.2rem 0 4rem;
  `}
`
