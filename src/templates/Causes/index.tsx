import Button from 'components/Button'
import CauseCategory from 'components/CauseCategory'
import CauseItem from 'components/CauseItem'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroCauses from 'components/HeroCauses'
import LeftArrow from 'components/icons/LeftArrow'
import RightArrow from 'components/icons/RightArrow'
import NavBar from 'components/NavBar'
import { useProblems } from 'contexts/ProblemsContext'
import Link from 'next/link'

import * as S from './styles'

const CauseOfPriorized = () => {
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
      label: 'Problemas Priorizados',
      disabled: !prioritizedProblems.length
    },
    {
      id: 3,
      href: '/diagnostico/causas-dos-problemas',
      label: 'Causas',
      disabled: !prioritizedProblems.length
    }
  ]

  const handleClick = () => {
    return
  }

  return (
    <>
      <Header />
      <Container>
        <S.ReturnLinkContainer>
          <Link href="/diagnostico/problemas-priorizados">
            <a>
              <LeftArrow color="white" />
            </a>
          </Link>
        </S.ReturnLinkContainer>

        <HeroCauses />
        <S.NavBarWrapper>
          <NavBar links={links} />
        </S.NavBarWrapper>
        <S.ContentWrapper>
          {prioritizedProblems.map((problemCategory) => (
            <S.CategoryWrapper key={problemCategory.title}>
              <CauseCategory title={problemCategory.title} />
              {problemCategory.prioritized_problems.map((problem) => (
                <CauseItem key={problem.problem_id} id={problem.problem_id} />
              ))}
            </S.CategoryWrapper>
          ))}
        </S.ContentWrapper>

        <S.ButtonWrapper>
          <Button onClick={handleClick}>
            <S.ButtonLabel>
              Seguir para Revisão
              <RightArrow />
            </S.ButtonLabel>
          </Button>
        </S.ButtonWrapper>
        <S.Text>Última atualização de dados: Fev/2022</S.Text>
      </Container>
      <Footer />
    </>
  )
}

export default CauseOfPriorized
