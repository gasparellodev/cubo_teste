import AddCauseForm from 'components/FormController/AddCauseForm'
import { parseCookies } from 'nookies'
import { getAPIClient } from 'services/axios'
import { getCauses } from 'services/get-causes'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function AdicionarCausa(props: any) {
  return <AddCauseForm {...props} />
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const causes = await getCauses({
    api: apiClient,
    cityId: 1,
    problemId: Number(ctx.query.id)
  })
  const { ['@unacity-token']: token } = parseCookies(ctx)
  const reduced = Object.assign({}, causes, {
    problemId: Number(ctx.query.problemId),
    token: token
  })

  return {
    props: {
      ...reduced
    }
  }
})
