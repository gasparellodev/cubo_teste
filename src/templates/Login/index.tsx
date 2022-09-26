import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Container from 'components/Container'
import Heading from 'components/Heading'
import BidLogo from 'components/icons/BidLogo'
import TextField from 'components/TextField'
import { useAuth } from 'contexts/AuthContext'
import * as yup from 'yup'

import * as S from './styles'

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

const Login = () => {
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
    <S.Wrapper>
      <Container>
        <S.LoginContent>
          {/* <S.HeadingWrapper>
            <Heading size="large" lineHeight="6rem">
              Plano de Segurança Pública para cidades
            </Heading>
          </S.HeadingWrapper>

          <S.Description>
            Uma ferramenta para criar um plano personalizado de gestão em
            segurança pública
          </S.Description> */}
           <BidLogo /> 

          <S.Form onSubmit={onSubmit} error={inputError}>
            <TextField
              placeholder="Nome do administrador ou e-mail"
              {...register('email')}
              error={errors.email?.message || inputError}
            />
            <TextField
              placeholder="Senha"
              type="password"
              {...register('password')}
              error={errors.password?.message || inputError}
            />

            {inputError && (
              <S.ErrorMessage>email ou senha incorretos</S.ErrorMessage>
            )}

            <S.ButtonContent>
              <Button isLoading={loading}>Entrar</Button>
            </S.ButtonContent>
          </S.Form>
          {/* <BidLogo /> */}
        </S.LoginContent>
      </Container>
    </S.Wrapper>
  )
}

export default Login
