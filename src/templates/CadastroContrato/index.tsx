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
import { useState } from 'react'
import ReturnLink from 'components/ReturnLink'

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

const CityProblems = () => {
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

  return (
    <>
      <Header />
      <Container>
        <ReturnLink href="/geoprocessamento/contrato" />
        <S.Wrapper>
          <S.Title>Cadastro</S.Title>

          <S.Form onSubmit={onSubmit}>
            <S.FormCollum>
              <S.TextAreaWrraperFull>
                <S.LabelTextArea>Tipo de cadastro</S.LabelTextArea>
                <TextField
                  placeholder="Tipo de cadastro"
                  {...register('email')}
                  error={errors.email?.message || inputError}
                />
              </S.TextAreaWrraperFull>

              <S.TextAreaWrraperFull>
                <S.LabelTextArea>Coordenadas</S.LabelTextArea>
                <TextField
                  placeholder="Coordenadas"
                  {...register('email')}
                  error={errors.email?.message || inputError}
                />
              </S.TextAreaWrraperFull>

              <S.TextAreaWrrapermMid2>
                <span>
                  <S.LabelTextArea>Diagnóstico</S.LabelTextArea>
                  <TextField
                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
                <span>
                  <S.LabelTextArea>Material</S.LabelTextArea>
                  <TextField
                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
              </S.TextAreaWrrapermMid2>
              <S.TextAreaWrraperFull>
                <S.LabelTextArea>Diagnóstico</S.LabelTextArea>
                <TextField
                  type="text"
                  //placeholder="Diagnóstico"
                  {...register('email')}
                  error={errors.email?.message || inputError}
                />
              </S.TextAreaWrraperFull>
            </S.FormCollum>

            <S.FormCollum>
              <S.TextAreaWrrapermMid2>
                <span>
                  <S.LabelTextArea>Rodovia</S.LabelTextArea>
                  <TextField
                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
                <span>
                  <S.LabelTextArea>Localização</S.LabelTextArea>
                  <TextField
                  placeholder="Km"

                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
              </S.TextAreaWrrapermMid2>

              <S.TextAreaWrrapermMid2>
                <span>
                  <S.LabelTextArea>Lado</S.LabelTextArea>
                  <TextField
                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
                <span>
                  <S.LabelTextArea>Descrição</S.LabelTextArea>
                  <TextField
                  placeholder="Descrição"

                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
              </S.TextAreaWrrapermMid2>

              <S.TextAreaWrrapermMid2>
                <span>
                  <S.LabelTextArea>Faixa de dominio</S.LabelTextArea>
                  <TextField
                    type="date"
                    {...register('email')}
                    error={errors.password?.message || inputError}
                  />
                </span>
             
              </S.TextAreaWrrapermMid2>

              <S.TextAreaWrraperFull>
                <S.LabelTextArea>Observação</S.LabelTextArea>
                <TextField
                  {...register('email')}
                  error={errors.email?.message || inputError}
                />
              </S.TextAreaWrraperFull>
            </S.FormCollum>
            {inputError && (
              <S.ErrorMessage>email ou senha incorretos</S.ErrorMessage>
            )}
            <S.ButtonContent>
              <Button isLoading={loading}>Enviar</Button>
            </S.ButtonContent>
          </S.Form>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default CityProblems
