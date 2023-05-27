import { useRouteError } from 'react-router-dom'

export default () => {
  const error = useRouteError()
  console.error(error)
  return (
    <>
      <div>에러 페이지</div>
      {/*temp*/}
    </>
  )
}
