import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import * as Button from 'components/Button/styles'
import { table } from 'console'

export const Wrapper = styled.div`
  min-height: 60vh;
`

export const NavBarWrapper = styled.div`
  margin-bottom: 8rem;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;

  & ${Button.Wrapper} {
    display: block;
    width: 34.9rem;
    margin: 0 auto;

    svg {
      margin-left: 27.5rem;
    }

    &:hover:enabled {
      svg path {
        fill: white;
      }
    }
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.content.small};
    font-weight: ${theme.font.weights.light};
    font-style: italic;
    margin: 8rem 0 7rem;
  `}
`
export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 3rem;
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: ${theme.colors.black};
  font-size: ${theme.font.content.regular};
  margin-top: 7rem;
`

export const SearchRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    width: 30%;
    height: 50px;
    border: 1px solid #979292;
    border-radius: 32px;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    svg {
      scale: 0.4;
    }
  }
`

export const Table = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 3.5rem;
`

export const TableHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #595959;
  border-radius: 14px 14px 0px 0px;
  div {
    width: 25%;
    padding: 20px;
    p {
      text-align: center;
    }
  }
`
export const TableLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #e5e5e5;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  div {
    width: 33%;
    //padding: 20px;
    svg {
      //scale: 0.3;
    }
    p {
      text-align: center;
      color: #000;
    }
  }
  &:nth-child(2n + 0) {
    background: #d9d9d9;
  }
  &:nth-last-child(-n+2) {
    border-radius: 0px 0px 14px 14px;
  }
`

export const TableIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  &:hover{
    cursor: pointer;
  }
`

export const TableIcon = styled.span`
  width: 60px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`
export const PaginationBtnWrraper = styled.div`
  width: auto;
  height: 40px;
  display: flex;
`

export const PaginationBtn = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 6px;
  background-color: #247ba0;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
