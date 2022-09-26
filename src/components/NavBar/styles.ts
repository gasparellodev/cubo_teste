import styled, { css, DefaultTheme } from 'styled-components'

type LinkStyleProps = {
  variant?: 'large' | 'small'
  disabled?: boolean
}

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    height: 9.3rem;
    transition: padding 0.3s ease;
    padding: ${theme.spacings.small} 0;
  `}
`

const itemsModifier = {
  small: (theme: DefaultTheme) => css`
    gap: ${theme.spacings.small};
  `,
  large: (theme: DefaultTheme) => css`
    gap: ${theme.spacings.small};
  `
}

export const Items = styled.ul<LinkStyleProps>`
  ${({ theme, variant }) => css`
    display: flex;
    justify-content: center;

    ${variant && itemsModifier[variant](theme)}
  `}
`

const itemModifier = {
  small: (theme: DefaultTheme) => css`
    &:not(:first-child) {
      &:before {
        content: '';
        display: inline-block;
        width: 1px;
        background: ${theme.colors.borderGray};
        height: 4rem;
        margin-right: ${theme.spacings.small};
      }
    }
  `,
  large: (theme: DefaultTheme, disabled: boolean) => css`
    &:not(:last-child) {
      &:after {
        content: '';
        width: 1.7rem;
        height: 1.7rem;
        border: 0.4rem solid ${disabled && theme.colors.base.grayLine};
        border-radius: 0.25rem;
        margin-left: ${theme.spacings.small};
        border-top: 0;
        border-left: 0;
        transform: rotate(-45deg);
        transition: all ${theme.transition.default};
      }
    }
  `
}

export const Item = styled.li<LinkStyleProps>`
  ${({ theme, variant, disabled }) => css`
    display: flex;
    align-items: center;

    ${variant && itemModifier[variant](theme, disabled!)}
  `}
`

const anchorModifiers = {
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-decoration: none;

    &:after {
      transform: scaleY(1);
    }
  `,
  small: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxxsmall} 0;
    font-size: ${theme.font.content.small};
    font-weight: ${theme.font.weights.bold};
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    &::after {
      height: 0.4rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xsmall} 0;
    font-size: ${theme.font.content.xlarge};
    font-weight: ${theme.font.weights.semiBold};

    &::after {
      height: 0.7rem;
    }
  `
}

export const Anchor = styled.a<LinkStyleProps>`
  ${({ theme, variant, disabled }) => css`
    color: ${theme.colors.black};
    position: relative;
    transition: color ${theme.transition.default};

    ${disabled &&
    css`
      color: ${theme.colors.base.grayLine};
    `}

    &:after {
      /* content: '';
      width: 100%;
      transform: scaleY(0);
      background: ${theme.colors.brand.gradientPrimary01};
      display: block;
      position: absolute;
      bottom: 0;
      transition: transform ${theme.transition.default}; */
    }

    &:hover {
      ${disabled
        ? css`
            cursor: not-allowed;
          `
        : css`
            ${anchorModifiers.active(theme)};
          `}
    }

    &.active {
      ${anchorModifiers.active(theme)}
    }

    ${variant && anchorModifiers[variant](theme)}
  `}
`
