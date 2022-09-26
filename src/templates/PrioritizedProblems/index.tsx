import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroProblem from 'components/HeroProblem'
import LeftArrow from 'components/icons/LeftArrow'
import RightArrow from 'components/icons/RightArrow'
import WarningIcon from 'components/icons/WarningIcon'
import NavBar from 'components/NavBar'
import PrioritizedProblemsList from 'components/PrioritizedProblemsList'
import { useProblems } from 'contexts/ProblemsContext'
import Link from 'next/link'
import Router from 'next/router'

import * as S from './styles'

const PriorizedProblems = () => {
  const { prioritizedProblems } = useProblems()

  const links = [
    {
      id: 1,
      href: '/diagnostico/problemas-do-municipio',
      label: 'Problemas do Município'
    },
    {
      id: 2,
      href: '/diagnostico/problemas-priorizados',
      label: 'Problemas Priorizados'
    },
    {
      id: 3,
      href: '/diagnostico/causas-dos-problemas',
      label: 'Causas',
      disabled: !prioritizedProblems.length
    }
  ]

  const handleClick = () => {
    if (!prioritizedProblems.length) {
      return Router.push('/diagnostico/problemas-do-municipio')
    }

    return Router.push('/diagnostico/causas-dos-problemas')
  }

  return (
    <>
      <Header />
      <Container>
        <S.ReturnLinkContainer>
          <Link href="/diagnostico/problemas-do-municipio">
            <a>
              <LeftArrow color="white" />
            </a>
          </Link>
        </S.ReturnLinkContainer>

        <HeroProblem />
        <S.NavBarWrapper>
          <NavBar links={links} />
        </S.NavBarWrapper>
        {!prioritizedProblems.length ? (
          <S.WarningWrapper>
            <WarningIcon />
            <p>
              Você não tem nenhum problema priorizado nesse momento. Selecione
              mais problemas para o seu diagnóstico.
            </p>
          </S.WarningWrapper>
        ) : (
          <PrioritizedProblemsList />
        )}
        <S.ButtonWrapper>
          <Button onClick={handleClick}>
            {!prioritizedProblems.length ? (
              <S.ButtonLabel>
                Problemas do Município <RightArrow />
              </S.ButtonLabel>
            ) : (
              <S.ButtonLabel>
                Avançar para Causas
                <RightArrow />
              </S.ButtonLabel>
            )}
          </Button>
        </S.ButtonWrapper>
        <S.Text>Última atualização de dados: Fev/2022</S.Text>
      </Container>
      <Footer />
    </>
  )
}

export default PriorizedProblems
