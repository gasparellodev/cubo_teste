/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import ArrowDown from 'components/icons/ArrowDown'
import ArrowStable from 'components/icons/ArrowStable'
import ArrowUp from 'components/icons/ArrowUp'

import * as S from './styles'

const Dashboard = ({
  rates,
  staticVariationPerCent,
  occurrencyCounterData,
  statisticDescriptions
}: any) => {
  const RatesValues: any[] = []
  const OcorrencyValues: any[] = []
  const OcorrencyTimeStamp: any[] = []
  const OcorrencyTimeStampWithoutConverted: any[] = []

  const [ratePerPeople, setRatePerPeople] = useState(0)
  const [variationPerCent, setVariationPerCent] = useState(0)
  const [occurrencyCounter, setoccurrencyCounterer] = useState(0)
  const [tendency, setTendency] = useState(0)
  const [secondValue, setSecondValue] = useState('')
  const [lastValue, setLastValue] = useState()
  const [
    periodNotConvertedOfVariationTax,
    setPeriodNotConvertedOfVariationTax
  ] = useState()
  const [periodNotConverted, setPeriodNotConverted] = useState()
  const [taxDescription, setTaxDescription] = useState('')
  const [verifyLength, setVerifyLength] = useState(0)
  const [previousSecondValue, setPreviousSecondValue] = useState('')
  const [previousLastValue, setPreviousLastValue] = useState('')
  const [occurrencyLastValue, setOccurrencyLastValue] = useState()
  const [occurencyLength, setOccurencyLength] = useState(0)

  const taxPercent = 'Taxa percentual'
  const tendencyIsGoog = statisticDescriptions.increase_is_good

  useEffect(() => {
    rates.map((rateArray: any) => {
      rateArray.rates.map(({ value }: any) => {
        RatesValues.push(value)

        const lastValue = RatesValues[RatesValues.length - 1]

        setRatePerPeople(lastValue)
        setTaxDescription(rateArray.rule_name)
      })
    })

    setVariationPerCent(staticVariationPerCent.percent)
    setTendency(staticVariationPerCent.status)

    occurrencyCounterData.map(({ value, time_stamp }: any) => {
      OcorrencyValues.push(value)
      setOccurencyLength(OcorrencyValues.length)
      setOccurrencyLastValue(OcorrencyValues[OcorrencyValues.length - 1])
      OcorrencyTimeStampWithoutConverted.push(time_stamp)

      const timeStampWithoutConverted =
        OcorrencyTimeStampWithoutConverted[
          OcorrencyTimeStampWithoutConverted.length - 1
        ]

      const timeStampWithoutConvertedOfVariationTax =
        OcorrencyTimeStampWithoutConverted[
          OcorrencyTimeStampWithoutConverted.length - 2
        ]

      setPeriodNotConvertedOfVariationTax(
        timeStampWithoutConvertedOfVariationTax
      )
      setPeriodNotConverted(timeStampWithoutConverted)

      const timeStampToDate = new Date(time_stamp.split('01T00').join('02T00'))
      const convertedTimeStamp = new Intl.DateTimeFormat('pt-BR', {
        month: 'short',
        year: 'numeric'
      })
        .format(timeStampToDate)
        .split('. de ')
        .join('/')

      OcorrencyTimeStamp.push(convertedTimeStamp)

      function previousDate(date: any) {
        const yearConvertedToString = String(date).substring(4, 8)
        const mounthConvertedToString = String(date).substring(0, 4)
        const dateConvertedToNumber = Number(yearConvertedToString) - 1

        const dateConvertedToNumberConvertedToString = String(
          dateConvertedToNumber
        )

        const fulldateConverted =
          mounthConvertedToString + dateConvertedToNumberConvertedToString

        return fulldateConverted
      }

      const secondValue = OcorrencyTimeStamp[1]
      const lastYearOfSecondValue = previousDate(secondValue)
      const lastValue = OcorrencyTimeStamp[OcorrencyTimeStamp.length - 1]
      const lastYearOfLastValue = previousDate(lastValue)
      const verifyLength = OcorrencyTimeStamp.length

      setVerifyLength(verifyLength)
      setSecondValue(secondValue)
      setPreviousSecondValue(lastYearOfSecondValue)
      setLastValue(lastValue)
      setPreviousLastValue(lastYearOfLastValue)

      setoccurrencyCounterer(
        +OcorrencyValues.reduce((total, value) => total + value, 0) -
          OcorrencyValues[0]
      )
    })
  }, [])

  return (
    <S.Container>
      <S.InformationCollected>
        <S.OccurenceCard>
          <S.FirstInfoCard>
            {occurencyLength < 6 ? occurrencyLastValue : occurrencyCounter}
          </S.FirstInfoCard>
          <S.SecondInfoCard>OCORRÊNCIAS</S.SecondInfoCard>
          <S.PeriodInfoCard>Período</S.PeriodInfoCard>
          <S.PeriodInfoCard>
            {verifyLength < 6
              ? periodNotConverted
              : `${secondValue} - ${lastValue}`}
          </S.PeriodInfoCard>
        </S.OccurenceCard>
        <S.TaxCard>
          <S.FirstInfoCard>
            {taxDescription == taxPercent
              ? `${ratePerPeople} %`
              : ratePerPeople}
          </S.FirstInfoCard>

          <S.SecondInfoCard>{taxDescription.toUpperCase()}</S.SecondInfoCard>

          <S.PeriodInfoCard>Período</S.PeriodInfoCard>
          <S.PeriodInfoCard>
            {verifyLength < 6
              ? periodNotConverted
              : `${secondValue} - ${lastValue}`}
          </S.PeriodInfoCard>
        </S.TaxCard>
        <S.RateCard>
          <S.FirstInfoCard>{variationPerCent} %</S.FirstInfoCard>

          <S.SecondInfoCard>VARIAÇÃO DA TAXA</S.SecondInfoCard>

          <S.PeriodInfoCard>Em relação ao período anterior</S.PeriodInfoCard>
          <S.PeriodInfoCard>
            {verifyLength < 6
              ? periodNotConvertedOfVariationTax
              : `${previousSecondValue} - ${previousLastValue}`}
          </S.PeriodInfoCard>
        </S.RateCard>
        <S.TendencyCard>
          <S.SecondInfoCard>TENDÊNCIA</S.SecondInfoCard>

          <S.TagTendencyCard
            color="#03E0B8"
            isGood={tendencyIsGoog}
            status={tendency == 3}
          >
            <ArrowUp status={tendency} isGood={tendencyIsGoog} />
            <span>AUMENTO</span>
          </S.TagTendencyCard>

          <S.TagTendencyCardStable color="#FF5C00" status={tendency == 2}>
            <ArrowStable status={tendency} /> <span>ESTÁVEL</span>
          </S.TagTendencyCardStable>

          <S.TagTendencyCardDown
            color="#03E0B8"
            isGood={tendencyIsGoog}
            status={tendency == 1}
          >
            <ArrowDown status={tendency} /> <span>REDUÇÃO</span>
          </S.TagTendencyCardDown>
        </S.TendencyCard>
      </S.InformationCollected>
    </S.Container>
  )
}

export default Dashboard
