/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'

import DownloadIconButton from 'components/icons/DownloadIconButton'
import TagOfOccurrence from 'components/icons/TagOfOccurrence'
import TagOfRates from 'components/icons/TagOfRates'
import dynamic from 'next/dynamic'
import { FactValues } from 'services/get-causes'

import * as S from './styles'

export default function ChartComponent({
  occurrencyCounterData,
  rateCounterData,
  statisticSource
}: any) {
  const occurrencyCounterDataArray: any[] = []
  const occurrencyTimeStampArray: any[] = []
  const occurrencyTimeStampConvertedArray: any[] = []
  const rateCounterDataArray: any[] = []
  const rateTimeStampArray: any[] = []

  const [sourceOfFont, setSourceOfFont] = useState('')

  const [verifyLength, setVerifyLength] = useState(0)

  const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
  })

  useEffect(() => {
    occurrencyCounterData.map(({ value, time_stamp }: FactValues) => {
      occurrencyCounterDataArray.push(value)
      occurrencyTimeStampArray.push(time_stamp)

      const timeStampToDate = new Date(time_stamp.split('01T00').join('02T00'))

      const convertedTimeStamp = new Intl.DateTimeFormat('pt-BR', {
        month: 'short',
        year: 'numeric'
      })
        .format(timeStampToDate)
        .split('. de ')
        .join('/')
      occurrencyTimeStampConvertedArray.push(convertedTimeStamp)
    })

    setVerifyLength(occurrencyTimeStampConvertedArray.length)

    rateCounterData.map((rate: any) => {
      rate.rates.map((rates: any) => {
        rateCounterDataArray.push(parseInt(rates.value))
        rateTimeStampArray.push(rates.time_stamp)
      })
    })

    setSourceOfFont(statisticSource.source)
  })

  const series = [
    {
      name: 'Ocorrências',
      type: 'bar',
      data: occurrencyCounterDataArray ?? [
        10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 30, 30
      ]
    },
    {
      name: 'Taxa',
      type: 'line',
      data: rateCounterDataArray ?? [
        10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 30, 30
      ]
    }
  ]
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: '#fff'
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      overwriteCategories:
        verifyLength < 6
          ? occurrencyTimeStampArray
          : occurrencyTimeStampConvertedArray,
      offsetY: 2,
      axisBorder: {
        color: '#fff'
      },
      axisTicks: {
        color: '#fff'
      }
    },
    fill: {
      opacity: 1
    },
    yaxis: [
      {
        title: {
          text: 'Número de Ocorrências',
          style: {
            fontSize: '12px',
            fontFamily: 'Poppins',
            fontWeight: 'regular',
            lineHeight: '14px'
          }
        }
      },
      {
        opposite: true,
        title: {
          text: String(
            (rateCounterData && rateCounterData[0].rule_name) ??
              'Taxa por 100.000 habitantes'
          ),
          style: {
            fontSize: '12px',
            fontFamily: 'Poppins',
            fontWeight: 'regular',
            lineHeight: '14px'
          }
        }
      }
    ]
  }

  const headers = [
    { label: 'Mês', key: 'meses' },
    { label: 'Ocorrência', key: 'ocorrencias' },
    { label: 'Taxa', key: 'taxas' }
  ]

  const data = [
    {
      ocorrencias: occurrencyCounterData[0].value,
      taxas: rateCounterData[0].rates[0].value,
      meses: occurrencyCounterData[0].time_stamp
    },
    {
      ocorrencias: occurrencyCounterData[1].value,
      taxas: rateCounterData[0].rates[1].value,
      meses: occurrencyCounterData[1].time_stamp
    },
    {
      ocorrencias: occurrencyCounterData[2].value,
      taxas: rateCounterData[0].rates[2].value,
      meses: occurrencyCounterData[2].time_stamp
    },
    {
      ocorrencias: occurrencyCounterData[3].value,
      taxas: rateCounterData[0].rates[3].value,
      meses: occurrencyCounterData[3].time_stamp
    },
    {
      ocorrencias: occurrencyCounterData[4].value,
      taxas: rateCounterData[0].rates[4].value,
      meses: occurrencyCounterData[4].time_stamp
    }
  ]

  return (
    <>
      {rateCounterData && (
        <S.Container>
          <Chart options={options} series={series} type="line" height={350} />
          <S.ContainerLegendOfChart>
            <S.LegendsOfChart>
              <S.ContainerTagOfLegends>
                <S.ContainerOfTags>
                  <TagOfOccurrence /> Ocorrências
                </S.ContainerOfTags>
                <S.ContainerOfTags>
                  <TagOfRates /> Taxa
                </S.ContainerOfTags>
              </S.ContainerTagOfLegends>
              <S.FontOfData>Fonte: {sourceOfFont} </S.FontOfData>
            </S.LegendsOfChart>

            <S.ButtonOfDownload>
              <CSVLink
                data={data}
                headers={headers}
                filename={'ocorrencias_e_taxas'}
                target="_blank"
              >
                Baixar dados
              </CSVLink>
              <DownloadIconButton />
            </S.ButtonOfDownload>
          </S.ContainerLegendOfChart>
        </S.Container>
      )}
    </>
  )
}
