import SLabeledInput from "../atoms/SLabeledInput.jsx";
import SInput from "../atoms/SInput.jsx";

export default () => {

    return (
        <div>
            <p className="mb-20 text-3xl font-bold">shall we code?</p>
            <SLabeledInput label="아이디" type="text" name="id" />
            <br/>
            <SLabeledInput label="비밀번호" type="text" name="password" />
            <br/>
            <SInput className="px-6 py-2 rounded text-white bg-emerald-700" type="button" value="로그인" onClick={() => alert("클릭")} />
        </div>
    )
}