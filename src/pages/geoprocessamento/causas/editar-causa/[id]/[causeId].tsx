import EditCause from 'components/FormController/EditCause'
import { parseCookies } from 'nookies'
import { getAPIClient } from 'services/axios'
import { getCauses } from 'services/get-causes'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function EditarCausa(props: any) {
  if (!props.title) return <div>Not found</div>
  else {
    return <EditCause {...props} />
  }
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const causes = await getCauses({
    api: apiClient,
    cityId: 1,
    problemId: Number(ctx.query.id)
  })

  const { ['@unacity-token']: token } = parseCookies(ctx)
  const reduced = Object.assign(
    {},
    causes.causes.find(({ id }) => id == Number(ctx.query.causeId)),
    {
      problemId: Number(ctx.query.id),
      token: token
    }
  )
  return {
    props: {
      ...reduced
    }
  }
})
