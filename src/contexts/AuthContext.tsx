import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import Router from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import {
  changePasswordRequest,
  COOKIE_TOKEN,
  signInRequest
} from 'services/auth'

type SignInData = {
  email: string
  password: string
}

type ChangePasswordData = {
  email: string
  password: string
  newPassword: string
}

type ForgotPasswordData = {
  email: string
}

type AuthContextValue = {
  isAuthenticated: boolean
  loading: boolean
  signIn: (data: SignInData) => Promise<void>
  logOut: () => void
  changePassword: (data: ChangePasswordData) => Promise<void>
  forgotPassword: (data: ForgotPasswordData) => Promise<void>
  user: {
    email: string
    password: string
  }
}

export const AuthContext = createContext({} as AuthContextValue)

type AuthProviderProps = {
  children: ReactNode
}

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // const { [COOKIE_TOKEN]: token } = parseCookies()

    // if (token) {
    //   setIsAuthenticated(true)
    // }
  }, [])

  const signIn = async ({ email, password }: SignInData) => {
    setLoading(true)
    try {
      const { token } = await signInRequest({
        email,
        password
      })

      setCookie(null, COOKIE_TOKEN, token, {
        path: '/',
        maxAge: 60 * 60 * 24 // 24 hours
      })

      setIsAuthenticated(token)

      Router.push('/diagnostico')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.error ===
          'Please change your password before trying to login'
      ) {
        setUser({
          email,
          password
        })
        Router.push('/primeiro-acesso')
        return
      }
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logOut = () => {
    destroyCookie(null, COOKIE_TOKEN, { path: '/' })
    Router.push('/')
  }

  const changePassword = async ({
    email,
    password,
    newPassword
  }: ChangePasswordData) => {
    setLoading(true)
    try {
      const data = await changePasswordRequest({
        email,
        password,
        newPassword
      })

      if (data.status === 201) {
        await signIn({
          email,
          password: newPassword
        })

        setUser({
          email: '',
          password: ''
        })

        return
      }
    } catch (err) {
      throw err
    } finally {
      setLoading(false)
    }
  }

  const forgotPassword = async ({ email }: ForgotPasswordData) => {
    setLoading(true)
    try {
      setUser({ ...user, email })
    } catch (err) {
      throw err
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        logOut,
        loading,
        user,
        changePassword,
        forgotPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
