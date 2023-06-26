import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { authenticationApi } from '../apis/authentication/authenticationApi'
import { useCookies } from 'react-cookie'

export default function () {
  // useEffect(() => {}, [])
  let [searchParams, _] = useSearchParams()
  const [cookies, setCookie] = useCookies()
  const navigator = useNavigate()
  const state = searchParams.get('state')
  if (!state) {
    throw new Error('state is empty')
  }

  useEffect(() => {
    authenticationApi.issueLoginToken(state).then((token) => {
      console.log('issueLoginToken : ', token)
      if (token) {
        setCookie('swc_login_token', token, {
          maxAge: 86400,
          path: '/',
        })
        navigator('/')
      }
    })
  }, [])
  return <div>리다이렉트 페이지</div>
}
