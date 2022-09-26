import OutsideLinkIcon from 'components/icons/OutsideLinkIcon'

import * as S from './styles'

const HeroCauses = () => (
  <S.Wrapper>
    <S.Title>Associe causas a cada um dos problemas priorizados</S.Title>
    <S.Description>
      A identificação, análise e seleção de causas é uma etapa fundamental do
      diagnóstico e permite uma compreensão mais aprofundada dos problemas. Esse
      processo exige dedicação, tempo e conhecimento técnico para identificar
      quais fatores são mais relevantes para a sua cidade. Parte desse trabalho
      é viabilizado nesta plataforma. Porém, o processo como um todo vai além
      dela. Saiba mais, acessando o{' '}
      <S.Link href="#">
        Guia Metodológico de Apoio à Identificação e Seleção de Causas
        <OutsideLinkIcon />
      </S.Link>
    </S.Description>
  </S.Wrapper>
)
export default HeroCauses
