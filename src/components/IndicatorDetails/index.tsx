import Tag, { TagProps } from 'components/Tag'
import { IndicatorProps, tagTextColor } from 'components/Tag/mapper'
import { CityProblemMetricModel } from 'services/city-problems'

import * as S from './styles'

type IndicatorDetailsProps = CityProblemMetricModel

const IndicatorDetails = ({
  title,
  metric_name,
  score,
  text
}: IndicatorDetailsProps) => {
  const colorName = tagTextColor[score as 1 | 2 | 3] as TagProps['color']

  return (
    <S.Wrapper color={colorName}>
      <S.Header>
        <S.Title>{title}</S.Title>
        <Tag
          indicator={metric_name as IndicatorProps}
          score={score as 1 | 2 | 3}
        />
      </S.Header>
      <S.Content>
        {text.map((item, index) => (
          <S.Item key={index}> {item} </S.Item>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default IndicatorDetails
