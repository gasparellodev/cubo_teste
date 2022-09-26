import AccordionCategoryList from 'components/AccordionCategoryList'
import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import RightArrow from 'components/icons/RightArrow'
import NavBar from 'components/NavBar'
import UserIcon from 'components/icons/UserIcon'
import FileProcessIcon from 'components/icons/FileProcessIcon'
import Cards from 'components/Cards'
import { useProblems } from 'contexts/ProblemsContext'
import Router from 'next/router'

import * as S from './styles'
import ReturnLink from 'components/ReturnLink'

const Geoprocessamento = () => {
  const { prioritizedProblems } = useProblems()

  return (
    <>
      <Header />
      <Container>
        <ReturnLink href='/geoprocessamento/'/>
        <S.Wrapper>
          <S.Title>Geoprocessamento</S.Title>
          <S.CardsWrapper>
            <Cards label="CDA - Cadastro de Ativos" href='controle-de-ativos'>
              <FileProcessIcon />
            </Cards>
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Geoprocessamento
