import * as S from './styles'

export type CriticalityLevelProps = {
  level: 1 | 2 | 3
}

const CriticalityLevel = ({ level }: CriticalityLevelProps) => {
  const maximumLevel = level > 3 ? 3 : level
  const levelNumber = level < 1 ? 1 : maximumLevel
  const arrayLevel = Array.from({ length: levelNumber }, (_v, k) => k)

  return (
    <S.Wrapper>
      <S.Stepper data-testid="stepper">
        {arrayLevel.map((item) => (
          <S.Step key={item} level={levelNumber} />
        ))}
      </S.Stepper>
    </S.Wrapper>
  )
}
export default CriticalityLevel
