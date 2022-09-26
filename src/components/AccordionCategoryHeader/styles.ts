import styled, { css } from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 84rem;
  width: 100%;
  padding: 4rem 0;
`

export const Icon = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: ${theme.colors.brand.gradientPrimary01};
    position: relative;
    flex-shrink: 0;

    &:before,
    &:after {
      content: '';
      width: 1.3rem;
      height: 0.2rem;
      display: block;
      background: #ffffff;
      border-radius: 1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.15s cubic-bezier(0.42, 0, 0.58, 1);
    }

    &:before {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    ${isOpen &&
    css`
      &:before {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    `}
  `}
`

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 48rem;
  width: 100%;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.regular};
    line-height: 2.4rem;
    color: ${theme.colors.white};
    margin-left: 2.4rem;
  `}
`
