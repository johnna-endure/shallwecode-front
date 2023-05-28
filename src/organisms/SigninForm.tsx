import { FormEvent, useState } from 'react'
import SelectSignupTypeModal from './SelectSignupTypeModal'
import { TextInput } from '../atoms/Input'
import { authenticationApi } from '../apis/authentication/authenticationApi'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const PASSWORD_LOGIN_URL = 'http://localhost:8080/login/password'
export default function SigninForm() {
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigator = useNavigate()
  const [openSignupModal, setOpenSignupModal] = useState(false)

  const githubLogin = async () => {
    // window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`
    // window.location.href = 'http://localhost:8080/authorized/github'
    // const res = await fetch('http://localhost:8080/authorized/github')
    window.location.href = 'http://localhost:8080/login/github'
    // console.log('githubLogin res : ', res)
  }

  const handleSubmitPasswordSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: any = {}
    for (const [k, v] of formData.entries()) {
      data[k] = v
    }
    const token = await authenticationApi.signinPassword(data)
    // TODO domain, path 설정 필요
    setCookie('swc_access_token', token, {
      maxAge: 86400,
    })
    navigator('/')
    // temp
    alert('로그인 성공')
  }

  return (
    <div className="flex flex-col items-center p-6">
      {/*로그인 배너 영역*/}
      <p className="mb-12 text-3xl">Shall we code?</p>

      {/*form 영역*/}
      <form
        className="flex flex-col items-center"
        method="post"
        action={PASSWORD_LOGIN_URL}
        onSubmit={(e: FormEvent<HTMLFormElement>) =>
          handleSubmitPasswordSignin(e)
        }>
        <TextInput
          className="mb-3 w-[340px]"
          name="loginId"
          placeholder="아이디를 입력해주세요"
        />
        <TextInput
          className="w-[340px]"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />

        <button
          className="rounded mt-10 p-3 w-[340px] text-white bg-[#00c473]"
          // onClick={() => alert('로그인')}
        >
          로그인
        </button>
      </form>

      {/*소셜 로그인 버튼 영역*/}
      <button
        className="rounded border border-[#00c473] my-3 p-3 w-[340px]"
        type="button"
        onClick={githubLogin}>
        Github로 로그인하기
      </button>

      {/*부가기능 영역*/}
      <div className="flex justify-between gap-2">
        <button type="button" onClick={() => setOpenSignupModal(true)}>
          회원가입
        </button>
        {/*TODO 임시 주석처리*/}
        {/*|<button type="button">아이디 찾기</button>|*/}
        {/*<button type="button">비밀번호 찾기</button>*/}
      </div>

      <SelectSignupTypeModal
        open={openSignupModal}
        onCancel={() => {
          setOpenSignupModal(false)
        }}
      />
    </div>
  )
}
