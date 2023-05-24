import { useRouteError } from 'react-router-dom'

export default () => {
  const error = useRouteError()
  console.error(error)
  return (
    <>
      <div>
        에러 페이지
        {/*<h1>Oops!</h1>*/}
        {/*<p>Sorry, an unexpected error has occurred.</p>*/}
        {/*<p>*/}
        {/*  <i>{error.statusText || error.message}</i>*/}
        {/*</p>*/}
      </div>
    </>
  )
}
