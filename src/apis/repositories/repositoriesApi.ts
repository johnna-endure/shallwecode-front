import { apiClient } from '../apiClient'

export const repositoriesApi = {
  getRepositoriesForUser: async (loginToken: string) => {
    try {
      const response = await apiClient(`/user/repositories`, 'get', null, {
        headers: { Authorization: `Bearer ${loginToken}` },
      })
      return response.data
    } catch (err) {
      return []
    }
  },
}
