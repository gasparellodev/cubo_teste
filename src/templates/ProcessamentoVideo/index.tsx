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

const CadastroRelatorio = () => {
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
          <S.Title>Processamento de Vídeos</S.Title>
          <S.Form onSubmit={onSubmit}>
            <S.TextAreaWrrapermMid1>
              <S.LabelTextArea>Número de contrato</S.LabelTextArea>
              <TextField
                placeholder="Número de contrato"
                type="text"
                {...register('email')}
                error={errors.password?.message || inputError}
              />
              <S.KmWrraper>
                <span>
                  <S.LabelTextArea>Periodo</S.LabelTextArea>
                  <TextField
                    type="text"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
                <span>
                  <S.LabelTextArea>Periodo</S.LabelTextArea>
                  <TextField
                    type="text"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
              </S.KmWrraper>
            </S.TextAreaWrrapermMid1>

            <S.TextAreaWrrapermMid2>
              <S.TesteWrraper1>
                <span>
                  <S.LabelTextArea>Estado</S.LabelTextArea>
                  <TextField
                    placeholder="Estado"
                    type="text"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
                <span>
                  <S.LabelTextArea>Periodo</S.LabelTextArea>
                  <TextField
                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
                <span>
                  <S.LabelTextArea>Periodo</S.LabelTextArea>
                  <TextField
                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
              </S.TesteWrraper1>
              <S.TesteWrraper>
                <span>
                  <S.LabelTextArea>Característica</S.LabelTextArea>
                  <span>
                    <span>
                      <input
                        type="radio"
                        id="huey"
                        name="caracteristica"
                        value="huey"
                        checked
                      />
                      <label htmlFor="huey">Duplicado</label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        id="louie"
                        name="caracteristica"
                        value="louie"
                      />
                      <label htmlFor="louie">Pista simples</label>
                    </span>
                  </span>
                </span>
                <span>
                  <S.LabelTextArea>Sentido</S.LabelTextArea>
                  <span>
                    <span>
                      <input
                        type="radio"
                        id="huey"
                        name="drone"
                        value="huey"
                        checked
                      />
                      <label htmlFor="huey">Crescente</label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        id="louie"
                        name="drone"
                        value="louie"
                      />
                      <label htmlFor="louie">Decrescente</label>
                    </span>
                  </span>
                </span>
              </S.TesteWrraper>
            </S.TextAreaWrrapermMid2>

            {inputError && (
              <S.ErrorMessage>email ou senha incorretos</S.ErrorMessage>
            )}
            <S.ButtonContent>
              <Button isLoading={loading}>Processar </Button>
              <Button isLoading={loading}>Cancelar</Button>
            </S.ButtonContent>

            <S.TextAreaWrraperFull>
              <S.LabelTextArea>Nome completo</S.LabelTextArea>
              <TextField
                type={'file'}
                placeholder="Nome completo"
                {...register('email')}
                error={errors.email?.message || inputError}
              />
            </S.TextAreaWrraperFull>
          </S.Form>
          <S.Table>
            <S.TableHead>
              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <div>
                <p>Ações</p>
              </div>
            </S.TableHead>
            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <S.TableStatus>
                <p>cancelado</p>
                </S.TableStatus>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>

              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <S.TableStatus>
                <p>cancelado</p>
                </S.TableStatus>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
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
                  <p>Nome</p>
                </div>
                <div>
                  <p>Número</p>
                </div>
                <div>
                  <p>Data</p>
                </div>
                <div>
                  <p>Ações</p>
                </div>
              </S.TableHead>
              <S.TableLine>
                <div>
                  <p>Nome</p>
                </div>
                <div>
                  <p>Número</p>
                </div>
                <div>
                  <p>00/00/0000</p>
                </div>
                <S.TableIconsWrapper>
                  <S.TableIcon
                    onClick={() => {
                      setModalOpen(!modalOpen)
                      console.log('teste')
                    }}
                  >
                    <ModifyIcon />
                  </S.TableIcon>

                  <S.TableIcon>
                    <DeleIcon />
                  </S.TableIcon>
                </S.TableIconsWrapper>
              </S.TableLine>
            </S.Table>
          </>
        </ModalForm>
      )}
    </>
  )
}

export default CadastroRelatorio
