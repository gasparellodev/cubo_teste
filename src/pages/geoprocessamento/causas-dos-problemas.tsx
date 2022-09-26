import { useEffect } from 'react'

import { useProblems } from 'contexts/ProblemsContext'
import { getAPIClient } from 'services/axios'
import { CityProblemModel, getCityProblems } from 'services/city-problems'
import CauseOfPriorized from 'templates/Causes'
import { withSSRAuth } from 'utils/withSSRAuth'

type CauseOfPriorizedPageProps = {
  cityProblems: CityProblemModel[]
}

export default function CauseOfPriorizedPage({
  cityProblems
}: CauseOfPriorizedPageProps) {
  const { setCityProblems } = useProblems()

  useEffect(() => {
    setCityProblems(cityProblems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityProblems])

  return <CauseOfPriorized />
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = getAPIClient(ctx)

  const cityProblems = await getCityProblems(api)

  return {
    props: {
      cityProblems
    }
  }
})
