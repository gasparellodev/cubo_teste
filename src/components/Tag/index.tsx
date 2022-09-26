import {
  tagTextMapper,
  tagColorMapper,
  IndicatorProps
} from 'components/Tag/mapper'

import * as S from './styles'

export type TagProps = {
  variant?: 'status' | 'problem' | 'indicator' | 'cause'
  indicator?: IndicatorProps
  color?: 'white' | 'green' | 'orange' | 'red'
  score?: 1 | 2 | 3
  count?: number
  text?: string
}

const Tag = ({
  variant = 'indicator',
  indicator,
  score,
  count,
  text
}: TagProps) => {
  return (
    <S.Tag
      color={tagColorMapper(variant, text, count, score) as TagProps['color']}
      variant={variant}
    >
      {variant === 'indicator' && tagTextMapper({ variant, indicator, score })}
      {variant === 'status' && tagTextMapper({ variant, score })}
      {(variant === 'problem' || variant === 'cause') && (
        <>
          <S.Count>{count}</S.Count>
          {tagTextMapper({ variant, score, count, text })}
        </>
      )}
    </S.Tag>
  )
}

export default Tag
