import CriticalityLevel, {
  CriticalityLevelProps
} from 'components/CriticalityLevel'
import Tag from 'components/Tag'

import * as S from './styles'

export type AccordionProblemHeaderProps = {
  onClick?: () => void
  isOpen: boolean
  title: string
  groupCount?: number
  showTags?: boolean
  tagsScore: [number, number, number]
  priority: CriticalityLevelProps['level']
}

const AccordionProblemHeader = ({
  onClick,
  isOpen,
  title,
  groupCount,
  showTags = true,
  tagsScore,
  priority
}: AccordionProblemHeaderProps) => (
  <S.Header>
    <S.TitleWrapper onClick={onClick}>
      <S.Icon isOpen={isOpen} />
      <S.Title>{title}</S.Title>
      {groupCount! > 1 && !isOpen && (
        <S.GroupCount>{`+${groupCount}`}</S.GroupCount>
      )}
    </S.TitleWrapper>
    {showTags && (
      <S.WrapperContent>
        {tagsScore.map((score, index) => (
          <Tag variant="status" key={index} score={score as 1 | 2 | 3} />
        ))}
        <CriticalityLevel level={priority} />
      </S.WrapperContent>
    )}
  </S.Header>
)

export default AccordionProblemHeader
