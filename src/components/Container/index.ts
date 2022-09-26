import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    padding: 0 ${theme.grid.gutter};
    margin-left: auto;
    margin-right: auto;
    height: auto;
  `}
`

export default Container
