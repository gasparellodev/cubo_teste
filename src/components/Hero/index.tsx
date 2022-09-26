import * as S from './styles'
import img from '../../../public/images/sobre-nos.jpg'
import Image from "next/image"

const Hero = () => (
  <S.Wrapper>
    {/* <S.Title>Analise e priorize os problemas de segurança pública</S.Title> */}
    <S.BoxImg>
      <Image src={img}/>
    </S.BoxImg>
    <S.Description>
      Modulus Consultoria foi fundada com a união de profissionais especialistas
      nas diversas áreas da engenharia de infraestrutura. O conceito Modulus de
      elaboração de soluções de engenharia está calcada na busca incessante de
      soluções tecnológicas para as demandas de estudos de tráfego, projetos de
      infraestrutura, avaliação de pavimentos, gerenciamento de ativos
      concedidos, modelagem de viabilidade de concessões públicas e parcerias
      público-privadas, verificador independente de ativos concedidos e soluções
      personalizadas de software para aplicações tecnológicas diversas.
      <br />
      <br />
      <br />
      Nossa missão é a busca pelo aumento da produtividade e assertividade da
      engenharia nacional através do emprego da tecnologia e sustentabilidade.
    </S.Description>
  </S.Wrapper>
)

export default Hero
