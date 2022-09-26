import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 3.4rem;
  justify-content: flex-end;
`

export const Item = styled.button<{ active: boolean }>`
  ${({ active }) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    min-width: 8rem;
    border: none;
    background-color: transparent;
    transition: all 0.2s ease;

    display: flex;
    align-items: center;

    position: relative;

    & svg {
      position: absolute;
      right: -7px;
    }

    &:nth-child(1) {
      margin-right: 120px;

      svg {
        right: -18px;
      }
    }

    &:nth-child(2) {
      margin-right: 116px;

      svg {
        right: -2px;
      }
    }

    &:nth-child(3) {
      margin-right: 116px;

      svg {
        right: -16px;
      }
    }

    ${active &&
    css`
      font-weight: bold;
    `}
  `}
`
