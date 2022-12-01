import { SHALLWECODE_ACCESS_TOKEN } from '../constant/auth.js'

export default function () {
  const authRequest = (url, config) => {
    const accessToken = localStorage.getItem(SHALLWECODE_ACCESS_TOKEN)

    if (!accessToken) {
      throw 'accessToken is empty'
    }

    new Request(url, {
      ...config,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}
