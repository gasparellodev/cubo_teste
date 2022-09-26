import styled, { css } from 'styled-components'

type ContentProps = {
  isOpen: boolean
}

export const Wrapper = styled.div``

const contentModifier = {
  isOpen: () => css`
    display: block;
    animation: fadeIn 0.3s cubic-bezier(0.42, 0, 0.58, 1) forwards;
  `
}

export const Content = styled.div<ContentProps>`
  margin-left: 6rem;

  ${({ isOpen }) => css`
    ${isOpen && contentModifier.isOpen()}

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`

export const Padding = styled.div``
