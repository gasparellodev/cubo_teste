import CircledRightArrowIcon from 'components/icons/CircledRightArrowIcon'

import * as S from './styles'

export type CauseCategoryProps = {
  title: string
}

const CauseCategory = ({ title }: CauseCategoryProps) => (
  <>
    <S.Wrapper>
      <S.Header>
        <S.TitleWrapper>
          <CircledRightArrowIcon />
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
      </S.Header>
    </S.Wrapper>
    <S.ColumnHeader>
      <S.ColumTitle>Causas associadas</S.ColumTitle>
      <S.ColumTitle>Nível de Criticidade</S.ColumTitle>
    </S.ColumnHeader>
  </>
)

export default CauseCategory
