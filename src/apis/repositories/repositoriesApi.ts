import { apiClient } from '../apiClient'

export const repositoriesApi = {
  getPublicRepositories: async (loginToken: string) => {
    try {
      const response = await apiClient(`/user/me/repositories`, 'get', null, {
        headers: { Authorization: `Bearer ${loginToken}` },
      })
      return response.data
    } catch (err) {
      return []
    }
  },
}
