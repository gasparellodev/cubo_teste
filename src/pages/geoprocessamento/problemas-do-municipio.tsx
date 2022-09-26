import { useEffect } from 'react'

import { useProblems } from 'contexts/ProblemsContext'
import { getAPIClient } from 'services/axios'
import { CityProblemModel, getCityProblems } from 'services/city-problems'
import CityProblems from 'templates/CityProblems'
import { withSSRAuth } from 'utils/withSSRAuth'

type CityProblemsPageProps = {
  cityProblems: CityProblemModel[]
}

export default function CityProblemsPage({
  cityProblems
}: CityProblemsPageProps) {
  const { setCityProblems } = useProblems()

  useEffect(() => {
    setCityProblems(cityProblems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityProblems])

  return <CityProblems />
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const cityProblems = await getCityProblems(apiClient)

  return {
    props: {
      cityProblems
    }
  }
})
