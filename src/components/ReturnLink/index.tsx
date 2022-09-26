import LeftArrow from 'components/icons/LeftArrow'
import Link from 'next/link'
import * as S from './styles'

type CardsProps = {
  id?: number
  href: string
}

const ReturnLink = (props: CardsProps) => {
  return (
    <>
      <S.ReturnLinkContainer>
        <Link href={props.href}>
          <S.SvgWrrapper>
            <a>
              <LeftArrow />
            </a>
          </S.SvgWrrapper>
        </Link>
      </S.ReturnLinkContainer>
    </>
  )
}

export default ReturnLink
