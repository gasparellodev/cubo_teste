import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { useProblems } from 'contexts/ProblemsContext'
import Router from 'next/router'

import TextField from 'components/TextField'
import { useForm } from 'react-hook-form'
import { useAuth } from 'contexts/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as S from './styles'
import { useEffect, useState } from 'react'
import ReturnLink from 'components/ReturnLink'
import ModifyIcon from 'components/icons/ModifyIcon'
import DeleIcon from 'components/icons/DeleIcon'
import ArrowLeft from 'components/icons/ArrowLeft'
import ArrowRight from 'components/icons/ArrowRight'
import ModalForm from 'components/FormController/ModalForm'

const onSubmit = () => {
  return console.log('teste')
}

type Inputs = {
  email: string
  password: string
}

type SignInData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('email obrigatório').email('email inválido'),
  password: yup.string().required('senha obrigatória')
})

const PosProcessamentoVideo2 = () => {
  const [inputError, setInputError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(signInFormSchema)
  })

  const { signIn, loading } = useAuth()

  const onSubmit = handleSubmit(async ({ email, password }: SignInData) => {
    setInputError(false)
    try {
      await signIn({ email, password })
    } catch (err) {
      setInputError(true)
    }
  })

  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    !modalOpen
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [modalOpen])

  return (
    <>
      <Header />
      <Container>
        <ReturnLink href="/geoprocessamento/controle-de-ativos" />
        <S.Wrapper>
          <S.Title>Pos Processamento de Vídeos</S.Title>
          <S.Table>
            <S.TableHead>
              <div>
                <p>Contrato</p>
              </div>

              <div>
                <p>Vídeo</p>
              </div>

              <div>
                <p>Rodovia</p>
              </div>

              <div>
                <p>Km Inicial</p>
              </div>

              <div>
                <p>Km final</p>
              </div>

              <div>
                <p>Sentido</p>
              </div>
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>Data Filmagem</p>
              </div>
              <div>
                <p>Data de Referência</p>
              </div>
            </S.TableHead>
            <S.TableLine>
              <div>
                <p>Contrato</p>
              </div>

              <div>
                <p>Vídeo</p>
              </div>

              <div>
                <p>Rodovia</p>
              </div>

              <div>
                <p>Km Inicial</p>
              </div>

              <div>
                <p>Km final</p>
              </div>

              <div>
                <p>Sentido</p>
              </div>
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Contrato</p>
              </div>

              <div>
                <p>Vídeo</p>
              </div>

              <div>
                <p>Rodovia</p>
              </div>

              <div>
                <p>Km Inicial</p>
              </div>

              <div>
                <p>Km final</p>
              </div>

              <div>
                <p>Sentido</p>
              </div>
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
            </S.TableLine>
            <S.TableLine>
              <div>
                <p>Contrato</p>
              </div>

              <div>
                <p>Vídeo</p>
              </div>

              <div>
                <p>Rodovia</p>
              </div>

              <div>
                <p>Km Inicial</p>
              </div>

              <div>
                <p>Km final</p>
              </div>

              <div>
                <p>Sentido</p>
              </div>
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
            </S.TableLine>

            <S.PaginationLine>
              <S.PaginationBtnWrraper>
                <S.PaginationBtn>
                  <p>1</p>
                </S.PaginationBtn>
                <S.PaginationBtn>
                  <ArrowLeft />
                </S.PaginationBtn>
                <S.PaginationBtn>
                  <ArrowRight />
                </S.PaginationBtn>
              </S.PaginationBtnWrraper>
            </S.PaginationLine>
          </S.Table>
        </S.Wrapper>
      </Container>
      <Footer />
      {modalOpen && (
        <ModalForm
          optionalButtonText="Voltar para Causas"
          mainButtonText="Sim, excluir"
          handleOptionalButtonAction={() => {
            setModalOpen(!modalOpen)
          }}
          handleMainButtonAction={function (e: any): void | React.ReactNode {
            throw new Error('Function not implemented.')
          }}
        >
          <>
          <S.Table>
            <S.TableHead>
              <div>
                <p>Contrato</p>
              </div>

              <div>
                <p>Vídeo</p>
              </div>

              <div>
                <p>Rodovia</p>
              </div>

              <div>
                <p>Km Inicial</p>
              </div>

              <div>
                <p>Km final</p>
              </div>

              <div>
                <p>Sentido</p>
              </div>
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>Data Filmagem</p>
              </div>
              <div>
                <p>Data de Referência</p>
              </div>
            </S.TableHead>
            <S.TableLine>
              <div>
                <p>Contrato</p>
              </div>

              <div>
                <p>Vídeo</p>
              </div>

              <div>
                <p>Rodovia</p>
              </div>

              <div>
                <p>Km Inicial</p>
              </div>

              <div>
                <p>Km final</p>
              </div>

              <div>
                <p>Sentido</p>
              </div>
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
            </S.TableLine>
            </S.Table>
          </>
        </ModalForm>
      )}
    </>
  )
}

export default PosProcessamentoVideo2
