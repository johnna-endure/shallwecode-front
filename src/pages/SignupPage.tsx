import { CenterContentPanel, FullScreenBackground } from '../atoms/Layout'
import React from 'react'
import SignupForm from '../organisms/SignupForm'
import { useParams } from 'react-router-dom'

export default () => {
  const params = useParams()
  const signupType = params?.type
  if (!signupType) throw new Error('signType is required')

  return (
    <FullScreenBackground>
      <CenterContentPanel>
          <SignupForm type={signupType} onClick={() => alert('가입')} />
      </CenterContentPanel>
    </FullScreenBackground>
  )
}
