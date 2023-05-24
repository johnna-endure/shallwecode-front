import { Link, Outlet } from 'react-router-dom'

export default (props: any) => {
  return (
    <div>
      인덱스 페이지
      <div>
        <Link to="/signin">로그인 페이지</Link>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
