import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  error: boolean
}

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    border: 0.1rem solid ${theme.colors.feedback.negativePure};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    display: flex;
    align-items: center;
    background: transparent;
    border: 0.1rem solid #555555;
    border-radius: ${theme.border.radius.medium};
    width: 100%;
    max-width: 44.5rem;
    position: relative;

    &:focus-within {
      background: ${theme.colors.lightgrey};
    }
    &::backdrop{
      background-color: red;
    }

    ${error && wrapperModifiers.error(theme)}
  `}
`

export const Input = styled.input<{ error: boolean }>`
  ${({ theme, error }) => css`
    //color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.content.regular};
    font-weight: ${theme.font.weights.medium};
    padding: 2rem 3.3rem;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.black};
    }

    &:-webkit-autofill {
      border-radius: ${theme.border.radius.medium};

      filter: none;

      &,
      &:active,
      &:focus,
      &:hover {
        -webkit-box-shadow: 0 0 0 5rem ${theme.colors.base.blueDark} inset !important;
      }

      -webkit-text-fill-color: white !important;
      font-family: ${theme.font.family};
      font-size: ${theme.font.content.regular};

      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.content.regular};
        color: #fff;
      }
    }

    ${error &&
    css`
      padding-right: 21rem;
    `}
  `}
`

export const WrapperError = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
`

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.feedback.negativePure};
    font-size: ${theme.font.content.xsmall};
    padding-right: 0.8rem;
    white-space: nowrap;
  `}
`

export const Icon = styled.div`
  display: flex;
  order: 1;
`
