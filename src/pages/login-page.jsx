import {useState} from "react";
import {requestLogin} from "../apis/user-api.js";
import LoginTemplate from "../templates/login-template";

export default () => {
  const [loginForm, setLoginForm] = useState({
    loginId: '',
    password: ''
  })

  const handleLogin = () => {
    requestLogin(loginForm)
      .then((data) => console.log('data:', data))
  }

  const onChangeForm = ({target: {name, value}}) => {
    setLoginForm({...loginForm, [name]: value})
  }


  return (
    <LoginTemplate head={<p className="mb-[120px] text-center text-3xl font-bold">shall we code?</p>}
                   onChangeForm={onChangeForm}
                   onSubmit={handleLogin}
    />
  )
}
