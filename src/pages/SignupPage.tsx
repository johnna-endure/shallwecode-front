import { CenterContentPanel, FullScreenBackground } from '../atoms/Layout'
import React from 'react'
import SignupForm from '../organisms/SignupForm'

export default () => {
  return (
    <FullScreenBackground>
      <CenterContentPanel>
        <div className="flex justify-center items-center">
          <SignupForm />
        </div>
      </CenterContentPanel>
    </FullScreenBackground>
  )
}
