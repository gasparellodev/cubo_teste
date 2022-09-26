import { withSSRAuth } from 'utils/withSSRAuth'

export default function DiagnosisPage() {
  return null
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    redirect: {
      destination: '/geoprocessamento/inicio',
      permanent: false
    }
  }
})
