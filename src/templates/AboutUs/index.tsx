import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import ReturnLink from 'components/ReturnLink'

import * as S from './styles'

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container>
        <ReturnLink href='/geoprocessamento/'/>
        <Hero />
      </Container>
      <Footer />
    </>
  )
}

export default AboutUs
