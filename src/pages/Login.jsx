import SLabeledInput from "../atoms/SLabeledInput.jsx";
import SInput from "../atoms/SInput.jsx";
import {useState} from "react";
import {requestLogin} from "../apis/user-api.js";

export default () => {

    const [loginId , setLoginId] = useState('')
    const [password , setPassword] = useState('')

    const data = {
        loginId,
        password
    }

    function handleLogin (data) {
        requestLogin(data)
            .then((data) => console.log('data:', data))


    }



    return (
        <div className="w-52 m-auto">
            <p className="mb-20 text-3xl font-bold">shall we code?</p>
            <SLabeledInput label="아이디" type="text" name="id" onChange={(e) => setLoginId(e.target.value)} />
            <br/>
            <SLabeledInput label="비밀번호" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <SInput className="px-6 py-2 rounded text-white bg-emerald-700" type="submit" value="로그인"
                    onClick={() =>handleLogin(data)}/>
        </div>
    )
}