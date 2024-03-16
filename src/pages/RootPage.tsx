import { Outlet } from 'react-router-dom'
import { FullScreenLayout } from '../layout/FullScreenLayout'
import { GlobalHeader } from '../components/header/GlobalHeader'

export const SWC_LOGIN_TOKEN = 'SWC_LOGIN_TOKEN'
export const RootPage = () => {
  // const [loginToken, setLoginToken] = useState<string | null>( // TODO recoil 공유상태로 선언
  //   localStorage.getItem(SWC_LOGIN_TOKEN)
  // )
  // const login = () => {
  //   window.location.href = 'http://localhost:8080/login/github'
  // }
  //
  // const fetchRepositories = async () => {
  //   const loginToken = localStorage.getItem(SWC_LOGIN_TOKEN)
  //   if (loginToken) {
  //     await repositoriesApi.getRepositoriesForUser(loginToken)
  //   }
  // }

  return (
    <FullScreenLayout>
      {/*헤더 영역*/}
      <div className="w-full h-[50px] bg-green-100">
        <GlobalHeader />
      </div>

      {/*컨텐츠 영역*/}
      <div className="w-full h-[calc(100%-50px)] bg-green-300">
        <Outlet />
      </div>
    </FullScreenLayout>
  )
}
