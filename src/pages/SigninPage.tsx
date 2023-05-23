import React, { useRef } from 'react'
import SigninForm from '../organisms/SigninForm'
import { CenterContentPanel, FullScreenBackground } from '../atoms/Layout'

export default () => {
  return (
    <FullScreenBackground>
      <CenterContentPanel>
        <div className="flex justify-center items-center">
          <SigninForm />
        </div>
      </CenterContentPanel>
    </FullScreenBackground>
  )
}
