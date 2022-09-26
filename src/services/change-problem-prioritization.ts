import { AxiosInstance } from 'axios'

type ChangeProblemPrioritizationParams = {
  api: AxiosInstance
  cityId: number
  problemId: number
  status: boolean
}

export const changeProblemPrioritization = async ({
  api,
  cityId,
  problemId,
  status
}: ChangeProblemPrioritizationParams): Promise<void> => {
  try {
    await api.patch(`/${cityId}/${problemId}`, { status })
  } catch (err) {
    throw err
  }
}
