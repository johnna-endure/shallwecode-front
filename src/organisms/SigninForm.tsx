import { FormEvent, useState } from 'react'
import SelectSignupTypeModal from './SelectSignupTypeModal'
import { TextInput } from '../atoms/Input'

const PASSWORD_LOGIN_URL = 'http://localhost:8080/login/password'
export default function SigninForm() {
  const [openSignupModal, setOpenSignupModal] = useState(false)

  const githubLogin = async () => {
    // window.location.href = 'http://localhost:8080/login/github'
    alert('깃허브 로그인')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
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
        onSubmit={(e: FormEvent) => handleSubmit(e)}>
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
          className="rounded mt-10 p-3 w-[340px] text-white bg-[#F34949]"
          onClick={() => alert('로그인')}>
          로그인
        </button>
      </form>

      {/*소셜 로그인 버튼 영역*/}
      <button
        className="rounded border border-[#F34949] my-3 p-3 w-[340px]"
        type="button"
        onClick={githubLogin}>
        Github로 로그인하기
      </button>

      {/*부가기능 영역*/}
      <div className="flex justify-between gap-2">
        <button type="button" onClick={() => setOpenSignupModal(true)}>
          회원가입
        </button>
        |<button type="button">아이디 찾기</button>|
        <button type="button">비밀번호 찾기</button>
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
