import SLabeledInput from '../atoms/s-labeled-input'
import {STextButton} from '../atoms/s-button'

/**
 * 로그인 페이지 템플릿
 */

export default function ({ head, onChangeForm, onSubmit }) {
  return (
    <div className="flex items-center w-full h-full">
        <div className="w-full">
          {/*헤드 영역*/}
          <div className="w-[300px] m-auto">{head}</div>
          {/*폼 영역*/}
          <div className="w-[300px] mx-auto mb-[20px]">
              <div className="w-52 m-auto">
            <SLabeledInput
              label="아이디"
              className="mx-auto"
              type="text"
              name="loginId"
              size={30}
              onChange={onChangeForm}
            />
            <br />
            <SLabeledInput
              label="비밀번호"
              type="password"
              name="password"
              size={30}
              onChange={onChangeForm}
            />
              </div>
          </div>

          {/*버튼 영역*/}
            <STextButton className="block m-auto" value="로그인" onClick={onSubmit} />
        </div>
    </div>
  )
}
