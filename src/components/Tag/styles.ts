import styled, { css, DefaultTheme } from 'styled-components'

import { TagProps } from '.'

export const colorModifiers = {
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.base.lightPure};
  `,
  green: (theme: DefaultTheme) => css`
    color: ${theme.colors.feedback.positivePure};
  `,
  orange: (theme: DefaultTheme) => css`
    color: ${theme.colors.feedback.mediumPure};
  `,
  red: (theme: DefaultTheme) => css`
    color: ${theme.colors.feedback.negativePure};
  `
}

const wrapperModifiers = {
  status: (theme: DefaultTheme) => css`
    padding: 0.2rem 0;
    font-weight: ${theme.font.weights.medium};
    width: 8.8rem;
  `,
  problem: (theme: DefaultTheme) => css`
    padding: 0.1rem 2rem;
    font-weight: ${theme.font.weights.light};
    min-width: 191px;
  `,
  indicator: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weights.medium};
    padding: 0.2rem 2.2rem;
    white-space: nowrap;
  `,
  cause: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weights.light};
    padding: 0.2rem 1.6rem;
    min-width: 18rem;
  `
}

export const Tag = styled.span<TagProps>`
  ${({ theme, color, variant }) => css`
    display: inline-block;
    border-radius: ${theme.border.radius.large};
    background: ${theme.colors.base.greyDark};
    font-size: ${theme.font.content.small};
    text-align: center;
    white-space: nowrap;

    ${color && colorModifiers[color](theme)}
    ${variant && wrapperModifiers[variant](theme)}
  `}
`

export const Count = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    padding-right: 0.5rem;
  `}
`
