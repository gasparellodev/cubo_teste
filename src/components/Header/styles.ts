import Container from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header<{ fixed: boolean }>`
  ${({ theme, fixed }) => css`
    width: 100%;
    margin: auto;
    border-bottom: 0.1rem solid ${theme.colors.base.whiteLine};
    top: -118px;
    position: sticky;
    z-index: 500;
    background-color: ${theme.colors.white};
    transition: all 0.3s ease;
    padding: 1rem 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

    & ${Container} {
      max-width: calc(${theme.grid.container} + 20rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    ${fixed &&
    css`
      top: 0;
    `}
  `}
`

export const NavWrapper = styled.div``

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  display: flex;
`

export const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.base};
    font-size: 14px;
    letter-spacing: 0.2rem;
    margin-right: 1.5rem;
  `}
`

export const IconsMenuWrapper = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
