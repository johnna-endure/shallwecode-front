import { apiClient } from '../apiClient'

export const authenticationApi = {
  checkLoginId: async (loginId: string) => {
    const res = await apiClient<string, boolean>(
      `/validate/login-id-duplicate?loginId=${loginId}`,
      'get'
    )

    return res.data
  },
}
