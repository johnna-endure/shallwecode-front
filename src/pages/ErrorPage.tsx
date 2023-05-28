import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import {ReactComponent as IconError} from '../assets/icon_error.svg'

export default () => {
  const error = useRouteError()
  console.error(error)

  function errorMessage() {
    if (isRouteErrorResponse(error)) {
      if(error.status === 404) {
        return <p>죄송합니다.<br/> 페이지가 존재하지 않습니다</p>
      }
    
      if(error.status ===401) {
        return <p>죄송합니다.<br/> 권한이 없습니다</p>
      }
    
      if(error.status === 500) {
        return <p>네트워크 오류가 발생했습니다.<br/> 잠시 후 다시 시도해주세요. </p>
      }
     }
     return <p>에러가 발생했습니다. <br/> 잠시 후 다시 시도해주세요.</p>
  }

 

   
  
  return (
    <div className='rounded border p-6 flex justify-center items-center gap-4 h-full text-base bg-[#f8f8f8]'>
      <IconError className='w-20 h-20'/>
      {errorMessage()}
    </div>
  )
}
