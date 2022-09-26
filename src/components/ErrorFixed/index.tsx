import { useEffect, useState } from 'react'

import Button from 'components/Button'
import Container from 'components/Container'
import AlertError from 'components/icons/AlertError'
import useScrollUp from 'hook/useScrollUp'

import * as S from './styles'

const ErrorFixed = ({
  message = 'Ops, tivemos um <span>erro</span> em associar essa causa. Por favor, tente novamente mais tarde.',
  active = false,
  duration = 8000
}) => {
  const { scrollUp } = useScrollUp()
  const [isActive, setIsActive] = useState(() => active)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    setIsActive(active)
  }, [active])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(false)
    }, duration)
    if (hover) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [duration, hover, active])

  return isActive ? (
    <S.Wrapper
      isActive={isActive}
      fixed={!scrollUp && isActive}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Container>
        <S.WrapperMessage>
          <AlertError />
          <S.ErroMessage dangerouslySetInnerHTML={{ __html: message }} />
        </S.WrapperMessage>
        <Button onClick={() => setIsActive(false)}>Entendi</Button>
      </Container>
    </S.Wrapper>
  ) : null
}

export default ErrorFixed
