import { useInView } from 'react-intersection-observer'

import dynamic from 'next/dynamic'

import * as S from './styles'

export type MapContainerProps = {
  variant?: 'small' | 'medium'
}

const MapContainer = ({ variant = 'medium' }: MapContainerProps) => {
  const { ref, inView } = useInView({
    rootMargin: '650px'
  })

  const Map = dynamic(() => import('./MapTest2'), {
    ssr: false
  })

  return (
    <S.Wrapper variant={variant} ref={ref}>
      {inView && <Map />}
    </S.Wrapper>
  )
}

export default MapContainer
