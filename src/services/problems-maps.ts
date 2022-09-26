import { AxiosInstance } from 'axios'

export type Coordinate = {
  lat: number
  long: number
  weight?: number
}

export type MapProblemResponse = {
  central_point: Coordinate
  coordinates: Coordinate[]
  problem_id: number
}

type GetMapProblemParams = {
  api: AxiosInstance
  cityId: number
  problemId: number
}

export const getMapProblem = async ({
  api,
  cityId,
  problemId
}: GetMapProblemParams): Promise<MapProblemResponse> => {
  try {
    const response = await api.get(`/${cityId}/${problemId}/maps`)
    return response.data
  } catch {
    return {} as MapProblemResponse
  }
}
