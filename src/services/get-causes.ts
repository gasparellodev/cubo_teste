import { AxiosInstance } from 'axios'
import { CriticalityLevelProps } from 'components/CriticalityLevel'

type GetCausesParams = {
  api: AxiosInstance
  cityId: number
  problemId: number
}

type GetDetailsCausesParams = {
  api: AxiosInstance
  cityId: number
  causeId: number
  problemId: number
}

export type AddCustomCauseParams = {
  api: AxiosInstance
  cityId: number
  problemId: number
  formData: any
}

type ChangeCustomCauseParams = {
  api: AxiosInstance
  cityId: number
  causeId: number
}

export type FactStatisticAnalysisModel = {
  id: number
  statistic_id: number
  analysis_link: string
  analysis: number
}

export type Cause = {
  id: number
  title: string
  description: string
  status: boolean
  is_literature_based: boolean
}

export type CauseResponse = {
  problem_name?: string
  priority?: CriticalityLevelProps['level']
  causes: Cause[]
  token?: any
  causeInfo: any
}

export type DetailCauseResponse = {
  data: FactDataModel[]
  causeInfo: any
}

export type FactDataModel = {
  statistic: FactInfoModel
  cause_information: CauseInformationModel
  applied_rates_data: AppliedRatesRuleModel[] | null
  statistic_variation: FactVariationModel | null
  ocurrency_count_data: FactValues[] | null
  statistic_analysis: FactStatisticAnalysisModel | null
}

export type FactInfoModel = {
  description: string
  name: string
  source: string
}

export type CauseInformationModel = {
  cause_name: string
  problem_id: number
  problem_name: string
  cause_description: string
}

export type AppliedRatesRuleModel = {
  rates: FactValues[]
  rule_name: string
}

export type FactValues = {
  value: number
  time_stamp: string
}

type FactVariationModel = {
  percent: string
  status: number
}

export const getCauses = async ({
  api,
  cityId,
  problemId
}: GetCausesParams): Promise<CauseResponse> => {
  try {
    const response = await api.get(`/${cityId}/${problemId}/causes`)
    return response.data
  } catch {
    return {} as CauseResponse
  }
}

export const getDetailsCauses = async ({
  api,
  cityId,
  problemId,
  causeId
}: GetDetailsCausesParams): Promise<DetailCauseResponse> => {
  try {
    const response = await api.get(
      `/city/${cityId}/problem/${problemId}/cause/${causeId}/facts`
    )
    return response.data
  } catch (error) {
    return {} as DetailCauseResponse
  }
}

export const addCustomCauses = async ({
  api,
  cityId,
  problemId,
  formData
}: AddCustomCauseParams): Promise<any> => {
  try {
    await api.post(`/city/${cityId}/problem/${problemId}/cause`, formData)
  } catch (error) {
    throw error
  }
}

export const changeCustomCause = async ({
  api,
  cityId,
  causeId
}: ChangeCustomCauseParams): Promise<void> => {
  try {
    await api.patch(`/city/${cityId}/cause/${causeId}`)
  } catch (error) {
    throw error
  }
}

export const deleteCustomCause = async ({
  api,
  cityId,
  causeId
}: ChangeCustomCauseParams): Promise<void> => {
  try {
    await api.delete(`/city/${cityId}/cause/${causeId}`)
  } catch (error) {
    throw error
  }
}
