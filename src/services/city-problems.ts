import { AxiosInstance } from 'axios'

export type CityProblemMetricModel = {
  title: string
  metric_name: string
  score: number
  text: string[]
}

export type CityProblemAnalysisModel = {
  id: number
  problem_id: number
  analysis_link: string
  analysis: number
}

export type CityProblemGroupItemModel = {
  item_name: string
  priority: number
  problem_id: number
  is_total: boolean
  is_prioritized: boolean
  metrics: CityProblemMetricModel[]
  problem_analysis: CityProblemAnalysisModel
}

export type CityProblemGroupsModel = {
  group_name: string
  priority: number
  metrics: CityProblemMetricModel[]
  group_items: CityProblemGroupItemModel[]
}

export type CityProblemModel = {
  category: string
  groups: CityProblemGroupsModel[]
}

export const getCityProblems = async (
  api: AxiosInstance
): Promise<CityProblemModel[] | []> => {
  try {
    const response = await api.get('/city-problems')
    return response.data.problems
  } catch {
    return []
  }
}
