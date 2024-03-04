interface LoginFormProp {
  width?: string
  height?: string
}

export const LoginForm = ({
  width = 'w-[400px]',
  height = 'h-[500px]',
}: LoginFormProp) => {
  const rootClassName = `${width} ${height}`
  return (
    <div className={rootClassName}>
      <form className="w-full h-full bg-amber-200">
        {/*헤드 텍스트*/}
        <div className="h-[20%] flex justify-center items-center bg-blue-700 ">
          <p className="text-3xl">Shall we code</p>
        </div>
        {/*input, 로그인 버튼 영역*/}
        <div className="h-[50%] flex justify-center items-center bg-red-100">
          <div className="w-full flex flex-col items-center gap-3">
            <input className={'w-2/3 border border-2'} type="text" />
            <input className={'w-2/3 border border-2'} type="text" />
            <button>로그인</button>
            <div>
              <p>계정이 없으신가요? 회원가입</p>
            </div>
          </div>
        </div>
        {/*소셜 로그인 버튼*/}
        <div className="h-[30%] bg-amber-700"></div>
      </form>
    </div>
  )
}
