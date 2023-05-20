import React, { useRef } from 'react'
import LoginForm from '../organisms/LoginForm'
import {
  CenterContentPanel,
  ComponentSize,
  FullScreenBackground,
} from '../atoms/Layout'

export default () => {
  return (
    <FullScreenBackground>
      <CenterContentPanel>
        <div className="flex justify-center items-center">
          <LoginForm />
        </div>
      </CenterContentPanel>
    </FullScreenBackground>
  )
}
