import FirstAccess from 'templates/FirstAccess'
import { withSSRGuest } from 'utils/withSSRGuest'

export default function FirstAccessPage() {
  return <FirstAccess />
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
