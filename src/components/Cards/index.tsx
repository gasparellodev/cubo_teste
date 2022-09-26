import * as S from './styles'
import NavBar from '../../components/NavBar'
import Link from 'next/link'

type CardsProps = {
  id?: number
  label: string
  href: string
  children: React.ReactNode
}

const links = [
  {
    id: 1,
    href: '/geoprocessamento',
    label: 'Diagnóstico'
  }
]

const Cards = (props: CardsProps) => (
  <Link href={props.href}>
    <S.Wrapper>
      {/* <NavBar links={links} variant="small" /> */}
      {props.children}
      <S.Label>{props.label}</S.Label>
    </S.Wrapper>
  </Link>
)

export default Cards
