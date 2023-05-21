import React, { useState } from 'react'
import { CenterContentPanel, FullScreenBackground } from './atoms/Layout'

export default function () {
  return (
    <FullScreenBackground color={'bg-gray-400'}>
      <CenterContentPanel />
    </FullScreenBackground>
  )
}
