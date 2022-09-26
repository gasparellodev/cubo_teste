import Tag from 'components/Tag'

import * as S from './styles'

export type AccordionCategoryHeaderProps = {
  title: string
  hiddenTag?: boolean
  tagsCount?: {
    total: number
    critical: number
  }
  isOpen: boolean
  onClick?: () => void
}

const AccordionCategoryHeader = ({
  title,
  tagsCount,
  onClick,
  isOpen,
  hiddenTag
}: AccordionCategoryHeaderProps) => (
  <S.Header>
    <S.TitleWrapper onClick={onClick}>
      <S.Icon isOpen={isOpen} />
      <S.Title>{title}</S.Title>
    </S.TitleWrapper>
    {!hiddenTag && (
      <S.WrapperContent>
        <Tag
          variant="problem"
          count={tagsCount?.total}
          text="problema relacionado"
        />
        <Tag
          variant="problem"
          count={tagsCount?.critical}
          text="problema crítico"
        />
      </S.WrapperContent>
    )}
  </S.Header>
)

export default AccordionCategoryHeader
