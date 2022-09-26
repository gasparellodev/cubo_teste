import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Container from 'components/Container'
import BidLogo from 'components/icons/BidLogo'
import LeftArrow from 'components/icons/LeftArrow'
import TextField from 'components/TextField'
import { useAuth } from 'contexts/AuthContext'
import Link from 'next/link'
import * as yup from 'yup'

import * as S from './styles'

type Inputs = {
  email: string
  confirmEmail: string
}

type ForgotPasswordData = {
  email: string
  confirmEmail: string
}

const emailConfirmationFormSchema = yup.object().shape({
  email: yup.string().required('email obrigatório').email('email inválido'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'emails divergentes')
})

const ForgotPassword = () => {
  const [inputError, setInputError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(emailConfirmationFormSchema)
  })

  const { loading, user, forgotPassword } = useAuth()

  const onSubmit = handleSubmit(async ({ email }: ForgotPasswordData) => {
    setInputError(false)
    try {
      forgotPassword({ email })
    } catch (err) {
      setInputError(true)
    }
  })

  return (
    <S.Wrapper>
      <Container>
        {!user.email ? (
          <S.FormContent>
            <Link href="/" passHref>
              <S.Anchor>
                <LeftArrow />
              </S.Anchor>
            </Link>
            <S.Description>
              Digite o seu email registrado para recuperar a sua senha e entrar
              na plataforma.
            </S.Description>
            <S.Form onSubmit={onSubmit}>
              <TextField
                placeholder="Digitar email do login"
                {...register('email')}
                error={errors.email?.message || inputError}
              />
              <TextField
                placeholder="Repetir email do login"
                {...register('confirmEmail')}
                error={errors.confirmEmail?.message || inputError}
              />

              <Button isLoading={loading}>Entrar</Button>
            </S.Form>
          </S.FormContent>
        ) : (
          <S.InstructionContent>
            <S.Description>
              O email de recuperação de senha será enviado para o seguinte
              endereço caso esteja cadastrado na plataforma:
            </S.Description>
            <S.Email>{user.email}</S.Email>
            <Button as="a" href="/">
              Voltar para login
            </Button>
          </S.InstructionContent>
        )}
        <BidLogo />
      </Container>
    </S.Wrapper>
  )
}

export default ForgotPassword
