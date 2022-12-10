import {useState} from "react";
import SLabeledInput from '../atoms/s-labeled-input'
import {STextButton} from '../atoms/s-button'

import {postUserSignUp} from "../apis/user-api.js";


export default function () {
    const [userForm, setUserForm] = useState({
        loginId: null,
        password: null,
        name: null,
        email: null,
        blogUrl: null,
        githubUrl: null
    })

    function handleChange({target: {value, name}}) {
        console.log('value', value)
        return(

            setUserForm({...userForm, [name]:value})
        )
    }

    function handleClickSignUp() {
        postUserSignUp(userForm).then((data) => {
            console.log('성공', data)
        }).catch((err)=>console.error('실패:', err))
    }

  return (
    <div className="flex h-full">
        <div className="w-52 m-auto">
          <p className="mb-14 text-3xl text-center font-bold">Sign Up</p>
          <SLabeledInput label="아이디" type="text" name="loginId" required onChange={handleChange} />
          <br />
          <SLabeledInput label="비밀번호" type="password" name="password" onChange={handleChange} />
          <br />
            <SLabeledInput label="이름" type="text" name="name" required onChange={handleChange} />
            <br/>
          <SLabeledInput label="이메일" type="email" name="email" required onChange={handleChange} />
          <br />
          <SLabeledInput label="블로그" type="url" name="blogUrl" onChange={handleChange}/>
          <br />
          <SLabeledInput label="깃허브" type="url"  name="githubUrl" onChange={handleChange}/>
          <br />
          <STextButton
            className="block m-auto disabled:opacity-20"
            type="button"
            value="가입하기"
            disabled={userForm.loginId === null || userForm.password === null || userForm.name === null || userForm.email === null}
            onClick={handleClickSignUp}
          />
        </div>
    </div>
  )
}
