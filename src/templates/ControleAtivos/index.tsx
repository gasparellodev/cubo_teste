import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import CamEngineIcon from 'components/icons/CamEngineIcon'
import UserCheckIcon from 'components/icons/UserCheckIcon'
import FileProcessIcon from 'components/icons/FileProcessIcon'
import FileArrowIcon from 'components/icons/FileArrowIcon'
import UserGuideIcon from 'components/icons/UserGuideIcon'
import CarCamIcon from 'components/icons/CarCamIcon'
import Cards from 'components/Cards'

import * as S from './styles'
import ReturnLink from 'components/ReturnLink'

const ControleAtivos = () => {
  return (
    <>
      <Header />
      <Container>
        <ReturnLink href="/geoprocessamento/geoprocessamento" />
        <S.Wrapper>
          <S.Title>CDA - Cadastro de Ativos </S.Title>
          <S.CardsWrapper>
            <Cards label="Processamento" href="">
              <CamEngineIcon />
            </Cards>
            <Cards label="Pós - Processamento" href="">
              <UserCheckIcon />
            </Cards>
          </S.CardsWrapper>
          <S.CardsWrapper>
            <Cards label="Contrato" href="contrato">
              <FileProcessIcon />
            </Cards>
            <Cards label="Relatório CDA" href="relatorios">
              <FileArrowIcon />
            </Cards>
          </S.CardsWrapper>
          <S.CardsWrapper>
            <Cards label="Manual de Operação" href="manual-filmagem">
              <UserGuideIcon />
            </Cards>
            <Cards label="Manual de Filmagem" href="manual-filmagem">
              <CarCamIcon />
            </Cards>
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default ControleAtivos
