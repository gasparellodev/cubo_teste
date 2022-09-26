import ArrowIcon from 'components/icons/ArrowIcon'
import CircledRightArrowIcon from 'components/icons/CircledRightArrowIcon'
import Tag from 'components/Tag'

import * as S from './styles'

export type PrioritizedProblemsCategoryProps = {
  title: string
  tagsCount: {
    total: number
    critical: number
  }
}

const PrioritizedProblemsCategory = ({
  title,
  tagsCount
}: PrioritizedProblemsCategoryProps) => (
  <>
    <S.Wrapper>
      <S.Header>
        <S.TitleWrapper>
          <CircledRightArrowIcon />
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
        <S.WrapperContent>
          <Tag
            variant="problem"
            count={tagsCount.total}
            text="problema priorizado"
          />
          <Tag
            variant="problem"
            count={tagsCount.critical}
            text="problema crítico"
          />
        </S.WrapperContent>
      </S.Header>
    </S.Wrapper>
    <S.Indicators>
      {['Desempenho', 'Tendência', 'Concentração', 'Nível de Criticidade'].map(
        (indicator) => (
          <S.Indicator key={indicator}>
            <>
              {indicator}
              <ArrowIcon />
            </>
          </S.Indicator>
        )
      )}
    </S.Indicators>
  </>
)

export default PrioritizedProblemsCategory
