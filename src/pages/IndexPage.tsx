import { Button } from '@material-tailwind/react'
import { repositoriesApi } from '../apis/repositories/repositoriesApi'
import { useState } from 'react'

export const SWC_LOGIN_TOKEN = 'SWC_LOGIN_TOKEN'
export const IndexPage = () => {
  const [loginToken, setLoginToken] = useState<string | null>( // TODO recoil 공유상태로 선언
    localStorage.getItem(SWC_LOGIN_TOKEN)
  )
  const login = () => {
    window.location.href = 'http://localhost:8080/login/github'
  }

  const fetchRepositories = async () => {
    const loginToken = localStorage.getItem(SWC_LOGIN_TOKEN)
    if (loginToken) {
      await repositoriesApi.getRepositoriesForUser(loginToken)
    }
  }

  return (
    <>
      <h1>메인</h1>
      <br />
      <br />
      <br />
      <div>
        {loginToken ? (
          '로그인인 중'
        ) : (
          <Button onClick={() => login()} placeholder="">깃허브 로그인 버튼</Button>
        )}

        <Button onClick={() => fetchRepositories()} placeholder="">
          리포지토리 목록 조회
        </Button>
      </div>
    </>
  )
}
