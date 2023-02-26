import { Link, useHref, useNavigate, useNavigation } from 'react-router-dom'

export default (props: any) => {
  // const goToPage = (url: string) => useHref(url)

  return (
    <div>
      인덱스 페이지
      <div>
        <Link to="/signin">로그인 페이지</Link>
      </div>
    </div>
  )
}
