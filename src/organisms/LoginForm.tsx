import { FormEvent, MouseEventHandler } from "react";
import { Link } from "react-router-dom";

// TODO form 필드 수정 필요
const PASSWORD_LOGIN_URL = "http://localhost:8080/login/password";
export default function LoginForm() {
  const githubLogin = async () => {
    window.location.href = "http://localhost:8080/login/github";
  };

  const handleSubmit = (e: FormEvent) => {
  };

  return (
    <div className="w-[1000px] h-[700px]">
      {/*로그인 배너 영역*/}
      <div className={`mt-[100px] bg-indigo-500 flex justify-center`}>
        <p className="text-2xl">Shall we code?</p>
      </div>

      {/*form 영역*/}
      <div className="flex justify-center">
        <form
          method="post"
          action={PASSWORD_LOGIN_URL}
          onSubmit={(e: FormEvent) => handleSubmit(e)}>
          <div>
            <label>아이디 :</label>
            <input className="border-2" type="text" />
          </div>
          <div>
            <label>패스워드 :</label>
            <input className="border-2" type="password" />
          </div>
          <div className="flex justify-center">
            <button className="border-2 w-16">로그인</button>
          </div>
        </form>
      </div>

      {/*소셜 로그인 버튼 영역*/}
      <div className="mt-[20px] flex justify-center items-center">
        <button className="block border-2" onClick={githubLogin}>
          Github로 로그인하기
        </button>
      </div>

      {/*부가기능 영역*/}
      <div className="flex justify-center">
        <p onClick={() => alert("hello")}>회원가입</p> |
        <Link>아이디 찾기</Link> |
        <Link>비밀번호 찾기</Link>
      </div>
    </div>
  );
}
