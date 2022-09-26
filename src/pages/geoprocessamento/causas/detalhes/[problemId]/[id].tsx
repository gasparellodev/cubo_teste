import { getAPIClient } from 'services/axios'
import { getCauses, getDetailsCauses } from 'services/get-causes'
import Detail, { DetailsCausesProps } from 'templates/Detail'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function DetailsCausesPage(props: DetailsCausesProps) {
  return <Detail {...props} />
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const detailsCauses = await getDetailsCauses({
    api: apiClient,
    cityId: 1,
    problemId: Number(ctx.query.problemId),
    causeId: Number(ctx.query.id)
  })

  const detailCause = await getCauses({
    api: apiClient,
    cityId: 1,
    problemId: Number(ctx.query.problemId)
  })

  const causeInfo =
    detailCause.causes.find(
      (cause: any) => cause.id === Number(ctx.query.id)
    ) ?? ''

  const propsResponse = Object.assign({}, detailsCauses, {
    causeInfo: causeInfo
  })

  return {
    props: {
      ...propsResponse
    }
  }
})
