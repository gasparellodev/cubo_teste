import styled, { css } from 'styled-components'

import * as Button from 'components/Button/styles'

export const Wrapper = styled.section`
  margin-bottom: 4rem;
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 0 3rem;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid ${theme.colors.base.whiteLine};
    margin-top: 16px;
  `}
`

export const LeftContainer = styled.div`
  max-width: 41.5rem;
`

export const RigthContainer = styled.div`
  margin-left: 7.2rem;
`

export const CausesContainer = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  margin-right: 40px;
`

export const PriorityContainer = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  margin-right: 130px;
  padding-left: 4rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);

  & ${Button.Wrapper} {
    width: 34.9rem;
  }
`

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-start;
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.xlarge};
    font-weight: 600;
    line-height: 32px;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    margin: 0.8rem 0 3.2rem;
    font-weight: 500;
    font-size: ${theme.font.content.regular};
    line-height: 24px;
    min-width: 40rem;
  `}
`

export const IndicatorWrapper = styled.ul`
  display: grid;
  row-gap: 5.6rem;
`

export const MapButton = styled.a`
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  color: #fff;
  border-bottom: 3px solid #fff;
`

export const Item = styled.li``
