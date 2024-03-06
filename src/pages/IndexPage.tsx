import { ThreeColumnContentTemplate } from '../template/ThreeColumnContentTemplate'

export const SWC_LOGIN_TOKEN = 'SWC_LOGIN_TOKEN'
export const IndexPage = () => {
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
    <ThreeColumnContentTemplate
      centerContent={<div className={'w-full h-full bg-blue-700'}></div>}
    />
  )
}
