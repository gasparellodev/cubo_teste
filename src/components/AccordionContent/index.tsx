/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react'

import Button from 'components/Button'
import ArrowMap from 'components/icons/ArrowMap'
import IndicatorDetails from 'components/IndicatorDetails'
import Map from 'components/Map'
import { useProblems } from 'contexts/ProblemsContext'
import { getAPIClient } from 'services/axios'
import { changeProblemPrioritization } from 'services/change-problem-prioritization'
import { getCityProblems } from 'services/city-problems'

import * as S from './styles'

type CityProblemMetricModel = {
  title: string
  metric_name: string
  score: number
  text: string[]
}

type CityProblemAnalysisModel = {
  id: number
  problem_id: number
  analysis_link: string
  analysis: number
}

type AccordionContentProps = {
  id: number
  isPrioritized: boolean
  metrics: CityProblemMetricModel[]
  problem_analysis: CityProblemAnalysisModel
}

const AccordionContent = ({
  id,
  metrics,
  problem_analysis,
  isPrioritized
}: AccordionContentProps) => {
  const {
    getMapCoordinates,
    mapProblem,
    setCityProblems,
    setIsAccordionContentOpen
  } = useProblems()

  const [isLoading, setIsLoadig] = useState(false)

  const handleChangeProblemPrioritization = async () => {
    if (!isLoading) {
      setIsLoadig(true)

      const api = getAPIClient()

      try {
        await changeProblemPrioritization({
          api,
          cityId: 1,
          problemId: id,
          status: !isPrioritized
        })
        const updatedProblems = await getCityProblems(api)
        setCityProblems(updatedProblems)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadig(false)
      }
    }
  }

  useEffect(() => {
    getMapCoordinates({
      cityId: 1,
      problemId: id
    })
    setIsAccordionContentOpen(true)

    return () => setIsAccordionContentOpen(false)
  }, [])

  const memoizedMap = useMemo(() => <Map />, [mapProblem])

  return (
    <S.Wrapper>
      <S.Title>Detalhamento do problema</S.Title>
      <S.ContentWrapper>
        <S.LeftContainer>{memoizedMap}</S.LeftContainer>
        <S.RigthContainer>
          <S.IndicatorWrapper>
            {metrics.map((metric, index) => (
              <S.Item key={index}>
                <IndicatorDetails
                  score={metric.score as 1 | 2 | 3}
                  text={metric.text}
                  title={metric.title}
                  metric_name={metric.metric_name}
                />
              </S.Item>
            ))}
          </S.IndicatorWrapper>
        </S.RigthContainer>
      </S.ContentWrapper>
      <S.Container>
        <S.CausesContainer>
          <S.Title>Analise o problema georreferenciado</S.Title>
          <S.Text>
            Siga para o aprofundamento georreferenciado e ganhe novas
            possibilidades de interação e descobertas sobre o problema.
          </S.Text>
          <S.MapButton
            target="_blank"
            href={
              problem_analysis
                ? problem_analysis.analysis_link
                : 'https://patrolroutes.csproject.org/geo/'
            }
          >
            Acesse o mapa {''}
            <ArrowMap />
          </S.MapButton>
        </S.CausesContainer>
        <S.PriorityContainer>
          <S.Title>Esse é um problema prioritário?</S.Title>
          <S.Text>
            Baseado nos dados e evidências que você analisou, opte por tornar
            esse problema prioritário e dê sequência ao seu plano.
          </S.Text>
          <Button
            isLoading={isLoading}
            checked={isPrioritized}
            onClick={handleChangeProblemPrioritization}
          >
            {isPrioritized ? 'Problema priorizado' : 'Priorizar problema'}
          </Button>
        </S.PriorityContainer>
      </S.Container>
    </S.Wrapper>
  )
}
export default AccordionContent
