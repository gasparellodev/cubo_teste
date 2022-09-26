import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 117rem;
    width: 100%;
    border-bottom: 0.1rem solid ${theme.colors.base.whiteLine};
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 84rem;
  width: 100%;
  padding-bottom: 4rem;
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

export const Indicators = styled.ul`
  display: flex;
  align-items: center;
  gap: 7.6rem;
  font-size: 12px;
  font-weight: 500;
  margin-top: 3.5rem;
  margin-left: 32rem;
`

export const Indicator = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 11rem;
  margin-right: 10px;
  text-align: center;

  &:nth-child(4) {
    margin-left: -33px;

    svg {
      margin-left: -24px;
    }
  }
`
