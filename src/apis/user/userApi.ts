import { UserRegisterResponse } from './userResponse'
import axios from 'axios'

const BACKEND_URL = 'http://localhost:8080'
export const userApi = {
  postPasswordSignup: async (data: string, type: 'password' | 'github') => {
    const res = await axios.post<UserRegisterResponse>(
      `${BACKEND_URL}/signup?type=password`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return res.status === 200
  },
}
