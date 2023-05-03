import React, { useRef } from 'react'
import OneColumnLayoutTemplate from '../templates/SingleContentLayoutTemplate'
import LoginForm from '../organisms/LoginForm'
// import '../index.css'

export default () => {
  return (
    <OneColumnLayoutTemplate>
      <LoginForm />
    </OneColumnLayoutTemplate>
  )
}
