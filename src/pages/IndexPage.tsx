import { Link, Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useState } from 'react'

export default (props: any) => {
  const [cookies, , removeCookie] = useCookies()
  const [isLogin, setIsLogin] = useState(cookies['swc_login_token'])

  const handleLogout = () => {
    removeCookie('swc_login_token')
    setIsLogin(false)
  }
  return (
    <div>
      인덱스 페이지
      <div>
        <Link to="/signin">로그인 페이지</Link>
        <div>
          {isLogin && <Link to="/my-repositories">내 리포지토리 링크</Link>}
        </div>

        <div>로그인 여부 : {isLogin ? 'true' : 'false'}</div>
        {isLogin && <button onClick={handleLogout}>로그아웃</button>}
        <Outlet></Outlet>
      </div>
    </div>
  )
}
