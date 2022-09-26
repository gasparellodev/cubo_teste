import styled, { css } from 'styled-components'


export const ReturnLinkContainer = styled.div`
  margin-top: 5rem;
`

export const SvgWrrapper = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 100%;
  a{
    svg{
      position: relative;
      top: 7px;
      left: 9px;
    }
  }

  &:hover{
    cursor: pointer;
  }
`

