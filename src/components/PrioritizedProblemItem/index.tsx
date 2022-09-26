import { useState } from 'react'

import CriticalityLevel, {
  CriticalityLevelProps
} from 'components/CriticalityLevel'
import CircledRightArrowIcon from 'components/icons/CircledRightArrowIcon'
import TrashCanIcon from 'components/icons/TrashCanIcon'
import Tag from 'components/Tag'
import { useProblems } from 'contexts/ProblemsContext'
import { getAPIClient } from 'services/axios'
import { changeProblemPrioritization } from 'services/change-problem-prioritization'
import { getCityProblems } from 'services/city-problems'

import * as S from './styles'

export type PrioritizedProblemItemProps = {
  id: number
  title: string
  tagsScore: [number, number, number]
  priority: CriticalityLevelProps['level']
}

const PrioritizedProblemItem = ({
  id,
  title,
  tagsScore,
  priority
}: PrioritizedProblemItemProps) => {
  const { setCityProblems } = useProblems()

  const [isLoading, setIsLoadig] = useState(false)

  const handleChangeProblemPrioritization = async () => {
    setIsLoadig(true)

    const api = getAPIClient()
    try {
      await changeProblemPrioritization({
        api,
        cityId: 1,
        problemId: id,
        status: false
      })
      const updatedProblems = await getCityProblems(api)
      setCityProblems(updatedProblems)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <CircledRightArrowIcon />
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
      <S.WrapperContent>
        {tagsScore.map((score, index) => (
          <Tag variant="status" key={index} score={score as 1 | 2 | 3} />
        ))}
        <CriticalityLevel level={priority} />
        {isLoading ? (
          <S.Spinner />
        ) : (
          <S.Button onClick={handleChangeProblemPrioritization}>
            <TrashCanIcon />
          </S.Button>
        )}
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default PrioritizedProblemItem
