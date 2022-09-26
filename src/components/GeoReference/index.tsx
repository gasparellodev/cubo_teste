import ArrowMap from 'components/icons/ArrowMap'

import * as S from './styles'

export default function GeoReference({ referenceLink }: any) {
  return (
    <div>
      <S.CausesContainer>
        <S.Title>Analise a estatística georeferenciada</S.Title>
        <S.Text>
          Siga para o aprofundamento georreferenciado e ganhe novas
          possibilidades de interação e descobertas sobre o problema.
        </S.Text>
        <S.MapButton
          target="_blank"
          href={
            referenceLink
              ? referenceLink.analysis_link
              : 'https://patrolroutes.csproject.org/geo/'
          }
        >
          Acesse o mapa {''}
          <ArrowMap />
        </S.MapButton>
      </S.CausesContainer>
    </div>
  )
}
