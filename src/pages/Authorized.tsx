import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function () {
  // useEffect(() => {}, [])
  const [searchParams, _] = useSearchParams()
  const code = searchParams.get('code')
  const clientId = 'c3aba5ab5e5dcb6cf559'
  const clientSecret = '8031bc3f1f016b63d200e1a5c332d7f3083b9646'
  const redirect_uri = 'http://localhost:5173'
  const uri = `https://github.com/login/oauth/access_token`
  // + `?code=${code}&client_id=${clientId}&client_secret=${clientSecret}`
  // client_id, client_secret, code, redirect_uri
  const getAccessToken = async () => {
    return await fetch(uri, {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        clientId,
        clientSecret,
        redirect_uri,
      }),
    })
  }
  useEffect(() => {
    // getAccessToken().then((res) => {
    //   debugger
    // })
  }, [])

  return <div>리다이렉트 페이지</div>
}
