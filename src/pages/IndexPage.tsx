import { Button } from '@material-tailwind/react'

export const IndexPage = () => {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/login/github'
  }

  return (
    <>
      <h1>메인</h1>
      <br />
      <br />
      <br />
      <div>
        <Button onClick={() => handleClick()}>깃허브 로그인 버튼</Button>
      </div>
    </>
  )
}
