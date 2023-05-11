import React, { useState } from 'react'
import { CenterContentContainer, ScreenGrayBackground } from './atoms/Layout'
import { TextInput } from './atoms/Input'

export default function () {
  return (
    <ScreenGrayBackground>
      <CenterContentContainer>
        <TextInput></TextInput>
      </CenterContentContainer>
    </ScreenGrayBackground>
  )
}
