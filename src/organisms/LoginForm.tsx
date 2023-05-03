import { FormEvent, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

const PASSWORD_LOGIN_URL = 'http://localhost:8080/login/password'
export default function LoginForm() {
  const githubLogin = async () => {
    window.location.href = 'http://localhost:8080/login/github'
  }

  const handleSubmit = (e: FormEvent) => {}

  return (
    <div className="w-[1000px] h-[700px]">
      {/*쉘위코드 이미지 영역*/}
      <div className={`mt-[100px] bg-indigo-500 flex justify-center`}>
        <p className="text-2xl">Shall we code?</p>
      </div>

      {/*패스워드 로그인 영역*/}
      <div className="flex justify-center">
        <form
          method="post"
          action={PASSWORD_LOGIN_URL}
          onSubmit={(e: FormEvent) => handleSubmit(e)}>
          <div>
            <label>아이디 :</label>
            <input className="border-2" type="text" />
          </div>
          <div>
            <label>패스워드 :</label>
            <input className="border-2" type="password" />
          </div>
          <div className="flex justify-center">
            <button className="border-2 w-16">로그인</button>
          </div>
        </form>
      </div>

      {/*소셜 로그인 버튼 영역*/}
      <div className="mt-[20px] flex justify-center items-center">
        <button className="block border-2" onClick={githubLogin}>
          Github로 로그인하기
        </button>
      </div>

      {/*회원가입 링크 버튼 영역*/}
      <div className="flex justify-center">
        <Link to="/signup">아이디가 없으신가요? 여기서 회원가입</Link>
      </div>
    </div>
  )
}
