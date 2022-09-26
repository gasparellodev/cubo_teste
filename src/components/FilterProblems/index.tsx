import Container from 'components/Container'
import { useProblems } from 'contexts/ProblemsContext'

import * as S from './styles'

import ArrowIcon from '../icons/ArrowIcon'

type FilterProblemsProps = {
  showFilters?: boolean
}

const FilterProblems = ({ showFilters = true }: FilterProblemsProps) => {
  const { setFilter, filter, isActive } = useProblems()

  return (
    <Container>
      <S.Wrapper>
        {showFilters && (
          <>
            <S.Item
              active={isActive('performance')}
              onClick={() => setFilter('performance')}
            >
              <span>Desempenho</span>
              <ArrowIcon desc={filter.desc} active={isActive('performance')} />
            </S.Item>
            <S.Item active={isActive('bias')} onClick={() => setFilter('bias')}>
              <span>Tendência</span>
              <ArrowIcon desc={filter.desc} active={isActive('bias')} />
            </S.Item>
            <S.Item
              active={isActive('concentration')}
              onClick={() => setFilter('concentration')}
            >
              <span>Concentração</span>
              <ArrowIcon
                desc={filter.desc}
                active={isActive('concentration')}
              />
            </S.Item>
            <S.Item
              active={isActive('priority')}
              onClick={() => setFilter('priority')}
            >
              <span>
                Nível de <br />
                Criticidade
              </span>
              <ArrowIcon desc={filter.desc} active={isActive('priority')} />
            </S.Item>
          </>
        )}
      </S.Wrapper>
    </Container>
  )
}

export default FilterProblems
