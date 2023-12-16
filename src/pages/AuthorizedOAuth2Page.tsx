import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { SWC_LOGIN_TOKEN } from './IndexPage'

export const AuthorizedOAuth2Page = () => {
  const [cookies, _, removeCookie] = useCookies(['SWC_LOGIN_TOKEN'])
  useEffect(() => {
    const loginToken = cookies[SWC_LOGIN_TOKEN]
    if (loginToken) {
      localStorage.setItem(SWC_LOGIN_TOKEN, loginToken)
      removeCookie(SWC_LOGIN_TOKEN)
    }
  }, [])

  return (
    <>
      <h1>로그인 성공</h1>
    </>
  )
}
