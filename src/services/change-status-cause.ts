import { AxiosInstance } from 'axios'

type ChangeStatusCauseParams = {
  causeId: number
  cityId: number
  problemId: number
  status: boolean
  api: AxiosInstance
}

export const changeStatusCause = async ({
  api,
  cityId,
  problemId,
  causeId,
  status
}: ChangeStatusCauseParams): Promise<void> => {
  try {
    await api.patch(`/${cityId}/${problemId}/cause/${causeId}`, {
      status
    })
  } catch (err) {
    throw err
  }
}
