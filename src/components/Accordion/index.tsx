import {
  cloneElement,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useRef
} from 'react'

import * as S from './styles'

type AccordionProps = {
  id: number | string
  currentOpen: number | string
  setCurrentOpen: (
    id: number | string
  ) => void | Dispatch<SetStateAction<number | string>>
  children?: ReactNode
  header: ReactElement
  hasBorder?: boolean
}

const Accordion = ({
  header,
  id,
  currentOpen,
  setCurrentOpen,
  children
}: AccordionProps) => {
  const open = id === currentOpen

  const wrapperRef = useRef<null | HTMLDivElement>(null)

  const scrollTo = () => {
    setTimeout(() => {
      wrapperRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  const handleClick = (id: number | string) => {
    if (open) {
      setCurrentOpen(typeof id === 'number' ? 0 : '')
    } else {
      setCurrentOpen(id)
    }

    if (children) scrollTo()
  }

  return (
    <S.Wrapper ref={wrapperRef}>
      {cloneElement(header, {
        onClick: () => handleClick(id)
      })}
      {open && (
        <S.Content isOpen={open}>
          <S.Padding>{children}</S.Padding>
        </S.Content>
      )}
    </S.Wrapper>
  )
}

export default Accordion
