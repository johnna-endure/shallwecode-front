import { FormEvent, useState } from 'react'
import SelectSignupTypeModal from './SelectSignupTypeModal'
import { TextInput } from '../atoms/Input'
import { Label } from '../atoms/Label'

// TODO form 필드 수정 필요
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
    <div className="w-[1000px] h-[700px]">
      {/*로그인 배너 영역*/}
      <div className={`mt-[100px] bg-indigo-500 flex justify-center`}>
        <p className="text-2xl">Shall we code?</p>
      </div>

      {/*form 영역*/}
      <div className="flex justify-center">
        <form
          method="post"
          action={PASSWORD_LOGIN_URL}
          onSubmit={(e: FormEvent) => handleSubmit(e)}>
          <div className={'my-2 flex justify-between'}>
            <Label text="아이디" />
            <TextInput name={'loginId'} />
          </div>
          <div className={'my-2 flex justify-between'}>
            <Label className={'w-20'} text="비밀번호" />
            <TextInput name={'password'} type={'password'} />
          </div>
          <div className="flex justify-center">
            <button className="border-2 w-16" onClick={() => alert('로그인')}>
              로그인
            </button>
          </div>
        </form>
      </div>

      {/*소셜 로그인 버튼 영역*/}
      <div className="mt-[20px] flex justify-center items-center">
        <button className="block border-2" onClick={githubLogin}>
          Github로 로그인하기
        </button>
      </div>

      {/*부가기능 영역*/}
      <div className="flex justify-center">
        <p onClick={() => setOpenSignupModal(true)}>회원가입</p> |
        <p>아이디 찾기</p> |<p>비밀번호 찾기</p>
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
