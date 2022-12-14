import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { useForm } from 'react-hook-form'
import { useAuth } from 'contexts/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as S from './styles'
import { useEffect, useState } from 'react'
import ReturnLink from 'components/ReturnLink'
import ModifyIcon from 'components/icons/ModifyIcon'
import CheckCircleIcon from 'components/icons/CheckCircleIcon'
import ModalForm from 'components/FormController/ModalForm'
import img from '../../../public/images/pos-processamento-frame.jpg'

import Image from 'next/image'
import TextField from 'components/TextField'

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

const PosProcessamentoVideo = () => {
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
           
            </S.TextAreaWrrapermMid1>
          </S.Form>
          <S.Table>
            <S.TableHead>
              <div>
                <p></p>
              </div>

              <div>
                <p>Panelas</p>
              </div>

              <div>
                <p>Remendos</p>
              </div>

              <div>
                <p>Trincas</p>
              </div>

              <div>
                <p>Roçada</p>
              </div>

              <div>
                <p>Sinalização</p>
              </div>
              <div>
                <p>Drenagem</p>
              </div>
            </S.TableHead>
            <S.TableLine>
              <div>
                <p>Detectados</p>
              </div>

              <div>
                <p></p>
              </div>

              <div>
                <p></p>
              </div>

              <div>
                <p></p>
              </div>

              <div>
                <p></p>
              </div>

              <div>
                <p></p>
              </div>
              <div>
                <p></p>
              </div>
            </S.TableLine>
            <S.TableLine>
              <div>
                <p>Restantes</p>
              </div>

              <div>
                <p> </p>
              </div>

              <div>
                <p></p>
              </div>

              <div>
                <p></p>
              </div>

              <div>
                <p></p>
              </div>

              <div>
                <p></p>
              </div>
              <div>
                <p> </p>
              </div>
            </S.TableLine>
            <S.TableLine>
              <S.TableIconsWrapper>
                <span>
                  <p>
                    <br />
                  </p>
                </span>

                <span>
                  <S.TableIcon>
                    <CheckCircleIcon />
                  </S.TableIcon>
                </span>
                <span>
                  <S.TableStatus>
                    <p>Processar</p>
                  </S.TableStatus>
                </span>

                <span>
                  <S.TableStatus>
                    <p>Processar</p>
                  </S.TableStatus>
                </span>

                <span>
                  <S.TableStatus>
                    <p>Processar</p>
                  </S.TableStatus>
                </span>

                <span>
                  <S.TableStatus>
                    <p>Processar</p>
                  </S.TableStatus>
                </span>
                <span>
                  <S.TableIcon>
                    <CheckCircleIcon />
                  </S.TableIcon>
                </span>
              </S.TableIconsWrapper>
            </S.TableLine>
          </S.Table>

          <S.InfoFrameWrapper>
            <S.InfoFrameImage>
              <Image src={img} />
            </S.InfoFrameImage>
            <S.WrapperInfos>
              <S.InfosFrame > 
                <p>Item avaliado</p>
                <span>Item avaliado</span>  
              </S.InfosFrame>
              <S.InfosFrame > 
                <p>Velocidade</p>
                <span>Velocidade</span>  
              </S.InfosFrame>

              <S.InfosFrame > 
                <p>Latitude</p>
                <span>Latitude</span>  
              </S.InfosFrame>
              <S.InfosFrame > 
                <p>Longitude</p>
                <span>Longitude</span>  
              </S.InfosFrame>

              <S.InfosFrame > 
                <p>SNV</p>
                <span>SNV</span>  
              </S.InfosFrame>
              <S.InfosFrame > 
                <p>Frame</p>
                <span>Frame</span>  
              </S.InfosFrame>
            </S.WrapperInfos>
          </S.InfoFrameWrapper>
          
          <S.ButtonContent>
              <Button isLoading={loading}>OK </Button>
              <Button isLoading={loading}>Falso Positivo</Button>
            </S.ButtonContent>
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
                  <p></p>
                </div>
                <div>
                  <p> </p>
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
                    <CheckCircleIcon />
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

export default PosProcessamentoVideo
