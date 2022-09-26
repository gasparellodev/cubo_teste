import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Container from 'components/Container'
import BidLogo from 'components/icons/BidLogo'
import LeftArrow from 'components/icons/LeftArrow'
import TextField from 'components/TextField'
import { useAuth } from 'contexts/AuthContext'
import Link from 'next/link'
import Router from 'next/router'
import * as yup from 'yup'

import * as S from './styles'

type Inputs = {
  password: string
  confirmPassword: string
}

type ChangePasswordData = {
  password: string
  confirmPassword: string
}

const changePasswordFormSchema = yup.object().shape({
  password: yup
    .string()
    .required('senha obrigatória')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])(?=.{8,})/,
      'senha fora dos requisitos'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'senhas divergentes')
})

const FirstAccess = () => {
  const [inputError, setInputError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(changePasswordFormSchema)
  })

  const { loading, user, changePassword } = useAuth()

  useEffect(() => {
    if (!user.email || !user.password) {
      Router.push('/login')
    }
  }, [user])

  const onSubmit = handleSubmit(async ({ password }: ChangePasswordData) => {
    setInputError(false)
    try {
      await changePassword({
        ...user,
        newPassword: password
      })
    } catch (err) {
      setInputError(true)
    }
  })

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Link href="/" passHref>
            <S.Anchor>
              <LeftArrow />
            </S.Anchor>
          </Link>
          <S.Description>
            Para o primeiro acesso, crie uma senha nova para você usar nas
            próximas vezes que for entrar (mínimo de 8 caracteres, 1 letra
            maiúscula, 1 número e 1 caractere especial).
          </S.Description>
          <S.Form onSubmit={onSubmit}>
            <TextField
              placeholder="Nova senha"
              type="password"
              {...register('password')}
              error={errors.password?.message || inputError}
            />
            <TextField
              placeholder="Repetir nova senha"
              type="password"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message || inputError}
            />

            <Button isLoading={loading}>Entrar</Button>
          </S.Form>
          <BidLogo />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default FirstAccess
