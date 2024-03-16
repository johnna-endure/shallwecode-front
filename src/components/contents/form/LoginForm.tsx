interface LoginFormComponent {
  width?: string
  height?: string
}

export const LoginForm = ({
  width = 'w-[400px]',
  height = 'h-[500px]',
}: LoginFormComponent) => {
  const rootClassName = `${width} ${height}`
  return (
    <div className={rootClassName}>
      <form className="w-full h-full bg-amber-200">
        {/*헤드 텍스트*/}
        <div className="h-[20%] flex justify-center items-center bg-blue-700">
          <p className="text-3xl">Shall we code</p>
        </div>
        {/*input, 로그인 버튼 영역*/}
        <div className="h-[50%] flex justify-center items-center bg-red-100">
          <div className="w-full flex flex-col items-center gap-3">
            <input
              className={'w-2/3 border border-2'}
              type="text"
              placeholder="이메일 입력"
            />
            <input
              className={'w-2/3 border border-2'}
              type="password"
              placeholder="비밀번호 입력"
            />
            <button type="button">로그인</button>
            <div>
              <p>
                계정이 없으신가요?{' '}
                <span onClick={() => alert('회원가입 페이지로 이동')}>
                  회원가입
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*소셜 로그인 버튼*/}
        <div className="h-[30%] bg-amber-700">
          <div className="w-full h-full flex flex-col pt-5">
            <button>깃허브로 로그인</button>
          </div>
        </div>
      </form>
    </div>
  )
}
