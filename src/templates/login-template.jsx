import SLabeledInput from "../atoms/SLabeledInput.jsx";
import SInput from "../atoms/SInput.jsx";

/**
 * 로그인 페이지 템플릿
 */

export default function ({head, onChangeForm, onSubmit}) {
  return (
    <div className="w-full">
      {/*헤드 영역*/}
      <div className="w-[300px] mx-auto mt-[10%]">
        {head}
      </div>
      {/*폼 영역*/}
      <div className="w-[300px] mx-auto mb-[20px]">
        <SLabeledInput label="아이디"
                       className="mx-auto"
                       type="text" name="id" size={30} onChange={onChangeForm}/>
        <br/>
        <SLabeledInput label="비밀번호" type="password" name="password" size={30}
                       onChange={onChangeForm}/>
      </div>

      {/*버튼 영역*/}
      <div className="w-[300px] mx-auto">
        <SInput className="px-6 py-2 rounded text-white bg-emerald-700" type="submit" value="로그인"
                onClick={onSubmit}/>
      </div>


    </div>
  )
}
