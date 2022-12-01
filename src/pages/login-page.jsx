import { useState } from 'react'
import { postUserLogin } from '../apis/user-api.js'
import LoginTemplate from '../templates/login-template'

export default () => {
  const [loginForm, setLoginForm] = useState({
    loginId: '',
    password: '',
  })

  const handleLogin = () => {
    postUserLogin(loginForm).then((data) => {
          if (data === null) {
            alert('존재하는 회원이 아닙니다.')
          }
        console.log('성공', data)
    }).catch((err)=>console.error('실패:', err))
  }

  const onChangeForm = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value })
  }

  return (
    <LoginTemplate
      head={
        <p className="mb-[120px] text-center text-3xl font-bold">
          shall we code?
        </p>
      }
      onChangeForm={onChangeForm}
      onSubmit={handleLogin}
    />
  )
}
