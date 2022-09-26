import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //padding: 89px 343px;
  padding: 0px 30px;
  gap: 43px;

  width: 30%;
  height: 15rem;

  background: #ffffff;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.26);
  border-radius: 38px;
  &:hover{
    cursor: pointer;  
  }
`


export const Label = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.small};
    color:  ${theme.colors.blue};
    line-height: 2.1rem;
    //max-width: 89rem;
  `}
`
