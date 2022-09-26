import Container from 'components/Container'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

type WrapperProps = {
  fixed: boolean
  isActive: boolean
}

const wrapperModifiers = {
  fixed: () => css`
    position: sticky;
    top: 8.8rem;

    opacity: 1;
    visibility: visible;
  `,

  active: () => css`
    position: sticky;
    top: 0;

    opacity: 1;
    visibility: visible;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, fixed, isActive }) => css`
    padding: 2.6rem 0;
    background: ${theme.colors.base.darkPure};

    position: relative;
    top: -21.8rem;
    opacity: 0;
    visibility: hidden;
    z-index: 450;
    transition: all 0.3s ease;

    ${Container} {
      display: flex;
      justify-content: space-between;
    }

    ${ButtonStyles.Wrapper} {
      max-width: 16rem;
      color: #253245;
      padding: 1.1rem 0;
      background: linear-gradient(90deg, #00c5d2 1.91%, #00add2 98.76%);
    }

    ${fixed && wrapperModifiers.fixed()}
    ${isActive && wrapperModifiers.active()}
    ${isActive && fixed && wrapperModifiers.fixed()}
  `}
`

export const WrapperMessage = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`

export const ErroMessage = styled.p`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: ${theme.font.content.small};
    line-height: 2.4rem;

    span {
      color: #ff185d;
    }
  `}
`
