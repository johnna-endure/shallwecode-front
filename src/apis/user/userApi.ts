import { UserSaveRequest } from './userRequest'
import { apiClient } from '../apiClient'

const BACKEND_URL = 'http://localhost:8080'
export const userApi = {
  signup: async (data: UserSaveRequest) => {
    try {
      const response = await apiClient<UserSaveRequest>(
        `/signup}`,
        'post',
        data
      )
      return response.status === 200
    } catch (err) {
      return false
    }
  },
}
