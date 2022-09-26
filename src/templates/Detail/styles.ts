import styled, { css } from 'styled-components'

export const Hero = styled.section`
  padding: 2rem 0 3rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const DropDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  width: 100%;

  > div {
    display: inline-flex;
    gap: 1.6rem;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 1.6rem;
  }
  p {
    transition: 10s ease-in-out;
    font-weight: 400;
    font-size: 1.4rem;
    padding-top: 8px;
  }
`

export const WrapperTextHero = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.semiBold};
    font-size: 3.2rem;
    line-height: 4.8rem;
    max-width: 125.8rem;
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxxsmall};

    strong {
      font-weight: ${theme.font.weights.bold};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.content.regular};
    line-height: 2.4rem;
    max-width: 108.9rem;
  `}
`

export const WrapperCriticalityLevelHero = styled.div`
  p {
    max-width: 6.7rem;
    text-align: center;
    font-weight: 300;
    font-size: 12px;
    line-height: 17px;
    margin: 0 auto 14px;
  }
`

export const NotFoundDataDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 400px;

  h2 {
    padding-top: 25px;
    font-size: 1.2rem;
    width: 35%;
    font-weight: 500;
    text-align: center;
  }
`

export const Hr = styled.hr`
  ${({ theme }) => css`
    margin: 8rem 0rem 4rem 0;
    width: 100%;
    height: 0.1rem;
    background: ${theme.colors.base.whiteLine};
    border: none;
  `}
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`

export const WrapperAccordion = styled.div`
  max-width: 1000px;
`
