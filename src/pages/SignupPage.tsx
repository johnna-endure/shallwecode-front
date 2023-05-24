import { CenterContentPanel, FullScreenBackground } from '../atoms/Layout'
import React from 'react'
import SignupForm from '../organisms/SignupForm'
import { useParams } from 'react-router-dom'

export default () => {
  const { type } = useParams()
  return (
    <FullScreenBackground>
      <CenterContentPanel>
        <div className="flex justify-center items-center">
          {/*<SignupForm type={type} onClick={() => alert('가입')} />*/}
        </div>
      </CenterContentPanel>
    </FullScreenBackground>
  )
}
