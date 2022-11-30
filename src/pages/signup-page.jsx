import SLabeledInput from '../atoms/s-labeled-input'
import SInput from '../atoms/s-button'

export default () => {
  return (
    <div className="w-52 m-auto">
      <p className="mb-20 text-3xl font-bold">Sign Up</p>
      <SLabeledInput label="아이디" type="text" name="id" required />
      <br />
      <SLabeledInput label="비밀번호" type="password" name="password" />

      <br />
      <SLabeledInput
        label="비밀번호 확인"
        type="password"
        name="password"
        required
      />
      <br />
      <SLabeledInput label="이메일" type="email" required />
      <br />
      <SLabeledInput label="블로그" type="url" />
      <br />
      <SLabeledInput label="깃허브" type="url" />
      <br />
      <SInput
        className="px-6 py-2 rounded text-white bg-emerald-700"
        type="button"
        value="로그인"
        onClick={() => alert('클릭')}
      />
    </div>
  )
}
