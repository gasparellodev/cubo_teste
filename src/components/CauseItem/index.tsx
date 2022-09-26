import { useEffect, useState } from 'react'

import CriticalityLevel from 'components/CriticalityLevel'
import CircledRightArrowIcon from 'components/icons/CircledRightArrowIcon'
import Tag from 'components/Tag'
import { getAPIClient } from 'services/axios'
import { CauseResponse, getCauses } from 'services/get-causes'

import * as S from './styles'

import Arrow from './Arrow'

export type CauseItemProps = {
  id: number
}

const getCheckedCausesCount = (causes: CauseResponse['causes'] | undefined) => {
  if (causes) {
    return causes?.reduce((acc, cause) => {
      if (cause.status === true) {
        return acc + 1
      }

      return acc
    }, 0)
  }
}

const CauseItem = ({ id }: CauseItemProps) => {
  const [causeData, setCausaData] = useState<CauseResponse>()

  useEffect(() => {
    const getCausesData = async () => {
      const api = getAPIClient()

      const data = await getCauses({ api, cityId: 1, problemId: id })
      setCausaData(data)
    }

    getCausesData()
  }, [id])

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <CircledRightArrowIcon />
        <S.Title>{causeData?.problem_name}</S.Title>
      </S.TitleWrapper>
      <S.WrapperContent>
        <Tag
          variant="cause"
          count={getCheckedCausesCount(causeData?.causes)}
          text="causa associada"
        />
        <CriticalityLevel level={causeData?.priority as 1 | 2 | 3} />
        <S.Button as="a" href={`/diagnostico/causas/${id}`}>
          <S.ButtonLabel>Associar Causas</S.ButtonLabel>
          <Arrow />
        </S.Button>
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default CauseItem
