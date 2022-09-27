import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ContractPen from 'components/icons/ContractPen'
import Contract from 'components/icons/Contract'
import Cards from 'components/Cards'

import * as S from './styles'
import ReturnLink from 'components/ReturnLink'

const Relatorios = () => {
  return (
    <>
      <Header />
      <Container>
        <ReturnLink href="/geoprocessamento/controle-de-ativos" />
        <S.Wrapper>
          <S.Title>Relatórios </S.Title>
          <S.CardsWrapper>
            <Cards label="Relatórios Técnicos" href="relatorios-options">
              <Contract />
            </Cards>
            <Cards label="Novo Cadastro" href="relatorios-cadastro">
              <ContractPen />
            </Cards>
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Relatorios
