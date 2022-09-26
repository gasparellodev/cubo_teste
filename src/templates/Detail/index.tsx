/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import Accordion from 'components/Accordion'
import AccordionCategoryHeader from 'components/AccordionCategoryHeader'
import Button from 'components/Button'
import ChartComponent from 'components/ChartComponent'
import Container from 'components/Container'
import Dashboard from 'components/Dashboard'
import Footer from 'components/Footer'
import GeoReference from 'components/GeoReference'
import Header from 'components/Header'
import DescriptionArrowClose from 'components/icons/DescriptionArrowClose'
import DescriptionArrowOpen from 'components/icons/DescriptionArrowOpened'
import LeftArrow from 'components/icons/LeftArrow'
import StatisticsNotFound from 'components/icons/StatisticsNotFound'
import { useProblems } from 'contexts/ProblemsContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DetailCauseResponse } from 'services/get-causes'

import * as S from './styles'

export type DetailsCausesProps = DetailCauseResponse

export default function Detail(detailArray: DetailsCausesProps) {
  const [currentCategoryOpen, setCurrentCategoryOpen] = useState(0)
  const [accordionDescriptions, setAccordionDescriptions] = useState(false)
  const { query } = useRouter()

  const { setCurrentGroupOpen, setCurrentProblemOpen } = useProblems()

  const handleClickCurrentCategoryOpen = (id: number) => {
    setCurrentCategoryOpen(id)
    setCurrentGroupOpen('')
    setCurrentProblemOpen(0)
  }
  useEffect(() => {}, [detailArray])

  return (
    <div
      style={{
        height: '100%'
      }}
    >
      <Header />
      <Container
        style={{
          height: '100',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}
      >
        <div>
          <>
            <S.Hero>
              <Link href={`/diagnostico/causas/${query.problemId}`}>
                <a>
                  <LeftArrow color="white" />
                </a>
              </Link>
            </S.Hero>
            <S.Wrapper>
              <S.WrapperTextHero>
                <S.Title>{detailArray.causeInfo.title}</S.Title>
                <S.Description>
                  Justificativa: {detailArray.causeInfo.description}
                </S.Description>

                {!detailArray.causeInfo.is_literature_based && (
                  <div style={{ paddingTop: 68 }}>
                    <h3 style={{ fontWeight: 600, fontSize: 16 }}>
                      Evidências
                    </h3>
                    <p style={{ fontWeight: 400, fontSize: 14 }}>
                      {detailArray.causeInfo.evidence ?? 'Não informado'}
                    </p>
                  </div>
                )}
              </S.WrapperTextHero>
            </S.Wrapper>
          </>

          {detailArray.causeInfo.is_literature_based && (
            <S.WrapperAccordion>
              {detailArray.data ? (
                <>
                  {detailArray.data.map((detail, index) => {
                    return (
                      <Accordion
                        key={index}
                        id={index + 1}
                        currentOpen={currentCategoryOpen}
                        setCurrentOpen={handleClickCurrentCategoryOpen as any}
                        header={
                          <AccordionCategoryHeader
                            hiddenTag
                            title={detail.statistic.name}
                            isOpen={currentCategoryOpen === index + 1}
                          />
                        }
                      >
                        {detail.applied_rates_data ? (
                          <>
                            <S.DropDescription
                              onClick={() =>
                                setAccordionDescriptions(!accordionDescriptions)
                              }
                            >
                              <div>
                                {accordionDescriptions ? (
                                  <DescriptionArrowOpen />
                                ) : (
                                  <DescriptionArrowClose />
                                )}
                                <h2>Descrição</h2>
                              </div>

                              {accordionDescriptions && (
                                <p>{detail.statistic.description}</p>
                              )}
                            </S.DropDescription>
                            <Dashboard
                              staticVariationPerCent={
                                detail.statistic_variation
                              }
                              occurrencyCounterData={
                                detail.ocurrency_count_data
                              }
                              rates={detail.applied_rates_data}
                              statisticDescriptions={detail.statistic}
                            />
                            <ChartComponent
                              detailArray={detailArray}
                              occurrencyCounterData={
                                detail.ocurrency_count_data
                              }
                              rateCounterData={detail.applied_rates_data}
                              statisticSource={detail.statistic}
                            />
                            <GeoReference
                              referenceLink={detail.statistic_analysis}
                            />
                          </>
                        ) : (
                          <>
                            <S.DropDescription
                              onClick={() =>
                                setAccordionDescriptions(!accordionDescriptions)
                              }
                            >
                              <div>
                                {accordionDescriptions ? (
                                  <DescriptionArrowOpen />
                                ) : (
                                  <DescriptionArrowClose />
                                )}
                                <h2>Descrição</h2>
                              </div>

                              {accordionDescriptions && (
                                <p>{detail.statistic.description}</p>
                              )}
                            </S.DropDescription>
                            <S.NotFoundDataDisplay>
                              <StatisticsNotFound />
                              <h2>
                                Ainda não temos dados para essa
                                estatística.Estamos trabalhando para em breve
                                disponibilizá-los.
                              </h2>
                            </S.NotFoundDataDisplay>
                          </>
                        )}
                      </Accordion>
                    )
                  })}
                </>
              ) : (
                <>
                  <S.DropDescription
                    onClick={() =>
                      setAccordionDescriptions(!accordionDescriptions)
                    }
                  >
                    <div>
                      {accordionDescriptions ? (
                        <DescriptionArrowOpen />
                      ) : (
                        <DescriptionArrowClose />
                      )}
                      <h2>Descrição</h2>
                    </div>
                  </S.DropDescription>
                  <S.NotFoundDataDisplay>
                    <StatisticsNotFound />
                    <h2>
                      Ainda não temos dados para essa estatística.Estamos
                      trabalhando para em breve disponibilizá-los.
                    </h2>
                  </S.NotFoundDataDisplay>
                </>
              )}
            </S.WrapperAccordion>
          )}

          <S.Hr />
          <S.WrapperButton>
            <Button as="a" href="/diagnostico/causas-dos-problemas">
              Analisar mais problemas
            </Button>
          </S.WrapperButton>
        </div>
        <Footer />
      </Container>
    </div>
  )
}
