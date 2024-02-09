export const LoginForm = () => {
  return <div className="w-[500px] h-[400px] bg-amber-200">
    {/*로그인 폼 header*/}
    <div>
      <p className="text-2xl">로그인</p>
    </div>
    {/*로그인 폼 body*/}
    <div>
      <form>
        <div>
          <label>아이디 </label>
          <input type="text" />
        </div>
        <div>
          <label>패스워드 </label>
          <input type="password" />
        </div>
      </form>
      <div className="flex justify-center">
        <button>로그인</button>
      </div>
      <div className="flex justify-center">
        <button>깃허브로 로그인</button>
      </div>
    </div>

    {/*로그인 footer*/}
    <div>
      <div className="flex justify-center">
        <button>회원가입</button>
      </div>
    </div>
  </div>
}
