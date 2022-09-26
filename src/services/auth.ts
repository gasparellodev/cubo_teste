import { api } from './apiClient'

export const COOKIE_TOKEN = '@unacity-token'

type SignInRequestParams = {
  email: string
  password: string
}

type ChangePasswordRequestParams = {
  email: string
  password: string
  newPassword: string
}

export const signInRequest = async ({
  email,
  password
}: SignInRequestParams) => {
  try {
    const response = await api.post('/login', { email, password })
    return response.data
  } catch (err) {
    throw err
  }
}

export const changePasswordRequest = async ({
  email,
  password,
  newPassword
}: ChangePasswordRequestParams) => {
  try {
    const response = await api.post('/change-password', {
      email,
      password,
      new_password: newPassword
    })
    return response
  } catch (err) {
    throw err
  }
}
