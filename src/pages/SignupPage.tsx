import { CenterContentPanel, FullScreenBackground } from '../atoms/Layout'
import React from 'react'
import SignupForm, { SignupType } from '../organisms/SignupForm'
import { useParams } from 'react-router-dom'

export default () => {
  const params = useParams()
  const signupType = params?.type
  if (!signupType) throw new Error('signType is required')
  if (!isSignupType(signupType)) {
    throw new Error('invalid signup type')
  }

  return (
    <FullScreenBackground>
      <CenterContentPanel>
          <SignupForm type={signupType} />
      </CenterContentPanel>
    </FullScreenBackground>
  )
}

function isSignupType(type: string): type is SignupType {
  if (type == 'password' || type == 'github') return true
  else return false
}
