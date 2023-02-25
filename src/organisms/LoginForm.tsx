export default function LoginForm() {
  return (
    <div className="w-[1000px] h-[700px]">
      {/*쉘위코드 이미지 영역*/}
      <div className={`mt-[100px] bg-indigo-500 flex justify-center`}>
        <p className="text-2xl">Shall we code?</p>
      </div>

      {/*로그인 버튼 영역*/}
      <div className={`mt-[200px] flex flex-col items-center`}>
        <button className="block border-2">Google로 로그인하기</button>
        <button className="block border-2">Github로 로그인하기</button>
        <button className="block border-2">이메일로 로그인하기</button>
      </div>
    </div>
  )
}
