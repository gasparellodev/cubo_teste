import Container from 'components/Container'
import UserIcon from 'components/icons/UserIcon'
import SearchIcon from 'components/icons/SearchIcon' 
import UnaLogo from 'components/icons/CuboLogo'
import NavBar from 'components/NavBar'
import { useAuth } from 'contexts/AuthContext'
import useScrollUp from 'hook/useScrollUp'

import * as S from './styles'

const links = [
  {
    id: 1,
    href: '/geoprocessamento',
    label: 'Início'
  },
  {
    id: 2,
    href: '/geoprocessamento/sobre-nos',
    label: 'Sobre nós',
  },
  {
    id: 3,
    href: '/geoprocessamento/relatorios',
    label: 'Relatórios',
  }
]

const Header = () => {
  const { logOut } = useAuth()
  const { scrollUp } = useScrollUp()

  return (
    <S.Wrapper fixed={!scrollUp}>
      <Container>
        <UnaLogo />
        <S.NavWrapper>
          <NavBar links={links} variant="small" />
        </S.NavWrapper>
        {/* <S.Button onClick={logOut}>
          <S.Label>Logout</S.Label>
        </S.Button> */}
        <S.IconsMenuWrapper>
          <SearchIcon />
          <UserIcon />
        </S.IconsMenuWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Header
