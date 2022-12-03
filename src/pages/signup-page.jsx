import SLabeledInput from '../atoms/s-labeled-input'
import {STextButton} from '../atoms/s-button'
import {useState} from "react";

export default function () {
    const [userForm, setUserForm] = useState({
        id:'',
        password:'',
        passwordCheck:'',
        email:'',
        blogUrl:'',
        githubUrl:''
    })

    // const [isShow, setIsShow] = useState(false)

    //비밀번호 확인 메시지 플래그 왜 이건 안되지?? 왜 값이 안바뀌지?
    let isShow = false

    function handleChange({target: {value, name}}) {
        return(
            setUserForm({...userForm, [name]:value})
        )
    }

    // function handleChange(e) {
    //     return(
    //         console.log('e', e)
    //     )
    // }
    function checkPassword({target: {value}}) {
        const initialPassword = document.querySelector("input[name = 'password']").value

            if (initialPassword !== value) {
                 return isShow = true
            } else if (initialPassword === value) {
                return isShow = false
            }

    }

    // function checkPassword({target: {value}}) {
    //     const initialPassword = document.querySelector("input[name = 'password']").value
    //
    //     if (initialPassword === value) {
    //         setIsShow(false)
    //     } else if (initialPassword !== value) {
    //         setIsShow(true)
    //     }
    //
    // }

    console.log('isshow', isShow)
  return (
    <div className="w-52 m-auto">
      <p className="mb-20 text-3xl font-bold">Sign Up</p>
      <SLabeledInput label="아이디" type="text" name="id" required onChange={handleChange} />
      <br />
      <SLabeledInput label="비밀번호" type="password" name="password" onChange={handleChange} />

      <br />
      <SLabeledInput
        label="비밀번호 확인"
        type="passwordCheck"
        name="passwordCheck"
        required
        onKeyPress={checkPassword}
        onChange={handleChange}
      />
        <p className={isShow ? 'block' : 'hidden' }>비밀번호가 일치하지 않습니다.</p>
      <br />
      <SLabeledInput label="이메일" type="email" name="email" required onChange={handleChange} />
      <br />
      <SLabeledInput label="블로그" type="url" name="blogUrl" onChange={handleChange}/>
      <br />
      <SLabeledInput label="깃허브" type="url"  name="githubUrl" onChange={handleChange}/>
      <br />
      <STextButton
        className="block m-auto"
        type="button"
        value="가입하기"
        onClick={() => alert('클릭')}
      />
    </div>
  )
}
