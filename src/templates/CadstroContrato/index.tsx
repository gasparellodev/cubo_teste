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
        <S.Wrapper>
          <S.Title>Contrato</S.Title>
          <S.Form onSubmit={onSubmit}>
            <S.TextAreaWrraperFull>
              <S.LabelTextArea>Nome completo</S.LabelTextArea>
              <TextField
                placeholder="Nome completo"
                {...register('email')}
                error={errors.email?.message || inputError}
              />
            </S.TextAreaWrraperFull>

            <S.TextAreaWrrapermMid1>
              <S.LabelTextArea>Número de contrato</S.LabelTextArea>
              <TextField
                placeholder="Número de contrato"
                type="text"
                {...register('email')}
                error={errors.password?.message || inputError}
              />
            </S.TextAreaWrrapermMid1>
            <S.TextAreaWrrapermMid2>
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
                <TextField
                  type="date"
                  {...register('email')}
                  error={errors.password?.message || inputError}
                />
              </span>
            </S.TextAreaWrrapermMid2>

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
