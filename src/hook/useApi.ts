import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const useApi = () => ({
  validateToken: async (problemId: string) => {
    const response = await api.post(`/city/1/problem/${problemId}/cause`, {})
    return response.data
  }
})
