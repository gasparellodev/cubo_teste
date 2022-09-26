import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ReturnLink from 'components/ReturnLink'
import { useProblems } from 'contexts/ProblemsContext'
//import document from '../../../public/images/dummy.pdf'
//import { Document } from 'react-pdf'

import * as S from './styles'

const ManualFilmagem = () => {
  const { prioritizedProblems } = useProblems()

  return (
    <>
      <Header />
      <Container>
        <ReturnLink href="/geoprocessamento/controle-de-ativos" />
        <S.Wrapper>
          <S.Title>Geoprocessamento</S.Title>
          <S.CardsWrapper>
            {/* <PDFViewer>
              <MyDocument />
              </PDFViewer> 
              <Document file='' />
            */}
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default ManualFilmagem
