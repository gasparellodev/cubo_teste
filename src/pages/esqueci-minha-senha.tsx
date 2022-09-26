import ForgotPassword from 'templates/ForgotPassword'
import { withSSRGuest } from 'utils/withSSRGuest'

export default function ForgotPasswordPage() {
  return <ForgotPassword />
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
