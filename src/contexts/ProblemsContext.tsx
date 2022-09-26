import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

import { HeatLatLngTuple, LatLngTuple } from 'leaflet'
import { getAPIClient } from 'services/axios'
import {
  CityProblemGroupItemModel,
  CityProblemModel
} from 'services/city-problems'
import { getMapProblem } from 'services/problems-maps'

type MapProblem = {
  central: LatLngTuple
  points: HeatLatLngTuple[] | LatLngTuple[]
}

type ProblemsProviderProps = {
  children: ReactNode
}

export type FilterType = 'priority' | 'performance' | 'bias' | 'concentration'

type Filter = {
  type: FilterType
  desc: boolean
}

export type FilterValues = {
  priority: number
  metrics: {
    score: number
  }[]
}

type GetMapCoordinatesParams = {
  cityId: number
  problemId: number
}

type PrioritizedProblems = {
  title: string
  prioritized_problems: CityProblemGroupItemModel[]
}

type ProblemsContextValue = {
  currentGroupOpen: string
  setCurrentGroupOpen: Dispatch<SetStateAction<string>>
  currentProblemOpen: number
  setCurrentProblemOpen: Dispatch<SetStateAction<number>>
  setFilter: (type: FilterType) => void
  isActive: (type: FilterType) => boolean
  setCityProblems: (problems: CityProblemModel[]) => void
  cityProblemsOriginal: CityProblemModel[]
  cityProblemsFiltered: CityProblemModel[]
  prioritizedProblems: PrioritizedProblems[]
  mapProblem: MapProblem
  filter: Filter
  getMapCoordinates: (params: GetMapCoordinatesParams) => void
  isAccordionContentOpen: boolean
  setIsAccordionContentOpen: Dispatch<SetStateAction<boolean>>
}

export const ProblemsContext = createContext({} as ProblemsContextValue)

export const useProblems = () => useContext(ProblemsContext)

function ProblemsProvider({ children }: ProblemsProviderProps) {
  const [currentGroupOpen, setCurrentGroupOpen] = useState('')
  const [currentProblemOpen, setCurrentProblemOpen] = useState(0)

  const [filter, setFilter] = useState<Filter>({
    type: 'priority',
    desc: true
  })

  const [filterOrder, setFilterOrder] = useState(() => (filter.desc ? 1 : -1))

  const FILTERS_FUNCTIONS = {
    priority: (a: FilterValues, b: FilterValues) =>
      (b.priority - a.priority ||
        b.metrics[0].score - a.metrics[0].score ||
        b.metrics[1].score - a.metrics[1].score ||
        b.metrics[2].score - a.metrics[2].score ||
        b.metrics[3].score - a.metrics[3].score ||
        b.metrics[4].score - a.metrics[4].score ||
        b.metrics[5].score - a.metrics[5].score) * filterOrder,
    performance: (a: FilterValues, b: FilterValues) =>
      (b.metrics[0].score - a.metrics[0].score ||
        b.priority - a.priority ||
        b.metrics[1].score - a.metrics[1].score ||
        b.metrics[2].score - a.metrics[2].score ||
        b.metrics[3].score - a.metrics[3].score ||
        b.metrics[4].score - a.metrics[4].score ||
        b.metrics[5].score - a.metrics[5].score) * filterOrder,
    bias: (a: FilterValues, b: FilterValues) =>
      (b.metrics[1].score - a.metrics[1].score ||
        b.priority - a.priority ||
        b.metrics[0].score - a.metrics[0].score ||
        b.metrics[2].score - a.metrics[2].score ||
        b.metrics[3].score - a.metrics[3].score ||
        b.metrics[4].score - a.metrics[4].score ||
        b.metrics[5].score - a.metrics[5].score) * filterOrder,
    concentration: (a: FilterValues, b: FilterValues) =>
      (b.metrics[5].score - a.metrics[5].score ||
        b.priority - a.priority ||
        b.metrics[0].score - a.metrics[0].score ||
        b.metrics[1].score - a.metrics[1].score ||
        b.metrics[2].score - a.metrics[2].score ||
        b.metrics[3].score - a.metrics[3].score ||
        b.metrics[4].score - a.metrics[4].score) * filterOrder
  }

  const [cityProblemsOriginal, setCityProblemsOriginal] = useState<
    CityProblemModel[] | []
  >([])

  const [cityProblemsFiltered, setCityProblemsFiltered] = useState<
    CityProblemModel[] | []
  >([])

  const [mapProblem, setMapProblem] = useState<MapProblem>({} as MapProblem)

  const [isAccordionContentOpen, setIsAccordionContentOpen] = useState(false)

  const isActive = (type: FilterType) => type === filter.type

  const handleFilter = (type: FilterType) => {
    const isFilterActiveAndDESC = isActive(type) && filter.desc

    setFilterOrder(isFilterActiveAndDESC ? -1 : 1)

    setFilter({
      type,
      desc: !isFilterActiveAndDESC
    })
  }

  const setCityProblems = (problems: CityProblemModel[]) => {
    setCityProblemsOriginal(problems)
  }

  const getFilteredCityProblems = () => {
    return structuredClone(cityProblemsOriginal).map((problemCategory) => {
      problemCategory.groups.sort(FILTERS_FUNCTIONS[filter.type])

      problemCategory.groups.forEach((problemGroup) =>
        problemGroup.group_items.sort(FILTERS_FUNCTIONS[filter.type])
      )

      return problemCategory
    })
  }

  const prioritizedProblems = cityProblemsOriginal
    .map((problemCategory) => {
      const prioritized_problems: CityProblemGroupItemModel[] = []

      problemCategory.groups.forEach((problemGroup) =>
        problemGroup.group_items.forEach(
          (groupItem) =>
            groupItem.is_prioritized && prioritized_problems.push(groupItem)
        )
      )

      prioritized_problems.sort(
        (a: FilterValues, b: FilterValues) =>
          b.priority - a.priority ||
          b.metrics[0].score - a.metrics[0].score ||
          b.metrics[1].score - a.metrics[1].score ||
          b.metrics[2].score - a.metrics[2].score ||
          b.metrics[3].score - a.metrics[3].score ||
          b.metrics[4].score - a.metrics[4].score ||
          b.metrics[5].score - a.metrics[5].score
      )

      return { title: problemCategory.category, prioritized_problems }
    })
    .filter((category) => category.prioritized_problems.length)

  const getMapCoordinates = async ({
    cityId,
    problemId
  }: GetMapCoordinatesParams) => {
    const apiClient = getAPIClient()
    try {
      const coordinates = await getMapProblem({
        api: apiClient,
        cityId,
        problemId
      })

      const points: any = coordinates.coordinates.map((coordinate) => {
        const pointsArray = []
        pointsArray.push(coordinate.lat, coordinate.long)
        if (coordinate.weight) pointsArray.push(coordinate.weight)
        return pointsArray
      })

      setMapProblem({
        points,
        central: [coordinates.central_point.lat, coordinates.central_point.long]
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setCityProblemsFiltered(getFilteredCityProblems())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, filterOrder, cityProblemsOriginal])

  return (
    <ProblemsContext.Provider
      value={{
        currentGroupOpen,
        setCurrentGroupOpen,
        currentProblemOpen,
        setCurrentProblemOpen,
        setFilter: handleFilter,
        filter,
        isActive,
        setCityProblems,
        cityProblemsFiltered,
        cityProblemsOriginal,
        prioritizedProblems,
        mapProblem,
        getMapCoordinates,
        isAccordionContentOpen,
        setIsAccordionContentOpen
      }}
    >
      {children}
    </ProblemsContext.Provider>
  )
}

export default ProblemsProvider
