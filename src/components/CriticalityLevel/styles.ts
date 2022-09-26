import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Step = styled.div<{ level: number }>`
  ${({ theme, level }) => css`
    width: 33.33%;
    height: 100%;
    background: ${level === 1
      ? theme.colors.feedback.positivePure
      : level === 2
      ? theme.colors.feedback.mediumPure
      : theme.colors.feedback.negativePure};
  `}
`

export const Stepper = styled.div`
  width: 100%;
  height: 0.8rem;
  background: #000000;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  gap: 0.1rem;
`
