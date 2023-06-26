import { apiClient } from '../apiClient'

export const authenticationApi = {
  checkLoginId: async (loginId: string) => {
    const res = await apiClient<string, boolean>(
      `/validate/login-id-duplicate?loginId=${loginId}`,
      'get'
    )

    return res.data
  },

  signinPassword: async (body: { loginId: string; password: string }) => {
    const res = await apiClient<any, string>('/signin/password', 'post', body)

    return res.data
  },

  issueLoginToken: async (state: string) => {
    const res = await apiClient<string, string>(
      `/issue/loginToken?state=${state}`,
      'get'
    )
    return res?.data
  },
}
