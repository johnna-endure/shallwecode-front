import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { authenticationApi } from '../apis/authentication/authenticationApi'

export default function () {
  // useEffect(() => {}, [])
  let [searchParams, _] = useSearchParams()
  console.log('state : ', searchParams.get('state'))
  useEffect(() => {
    const state = searchParams.get('state')
    if (state) {
      authenticationApi.issueLoginToken(state).then((ret) => {
        console.log('issueLoginToken : ', ret)
      })
    }
  })
  return <div>리다이렉트 페이지</div>
}
