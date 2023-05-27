import { UserSaveRequest } from './userRequest'
import { SignupType } from '../../organisms/SignupForm'
import { apiClient } from '../apiClient'

const BACKEND_URL = 'http://localhost:8080'
export const userApi = {
  signup: async (data: UserSaveRequest, type: SignupType) => {
    try {
      const response = await apiClient<UserSaveRequest>(
        `/signup?type=${type}`,
        'post',
        data
      )
      return response.status === 200
    } catch (err) {
      return false
    }
  },
}
