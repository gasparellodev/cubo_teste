import AuthProvider from 'contexts/AuthContext'
import ProblemsProvider from 'contexts/ProblemsContext'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ProblemsProvider>
        <Head>
          <title>
            CUBO{/* PROVISÓRIO  */}
          </title>
        </Head>
        <GlobalStyles />
        {/* <AuthProvider> */}
          <Component {...pageProps} />
        {/* </AuthProvider> */}
      </ProblemsProvider>
    </ThemeProvider>
  )
}

export default App
