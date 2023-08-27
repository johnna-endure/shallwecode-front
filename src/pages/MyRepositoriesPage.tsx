import { useEffect } from 'react'
import { repositoriesApi } from '../apis/repositories/repositoriesApi'
import { useCookies } from 'react-cookie'

export default () => {
  const [cookies] = useCookies()
  const loginToken = cookies['swc_login_token']
  useEffect(() => {
    if (loginToken) {
      repositoriesApi.getPublicRepositories(loginToken).then((ret) => {
        console.log('getPublicRepositories : ', ret)
      })
    }
  }, [])

  return (
    <>
      <div>내 리포지토리 컨텐츠 영역</div>
    </>
  )
}
