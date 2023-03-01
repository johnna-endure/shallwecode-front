import React, { useRef } from 'react'
import OneColumnLayoutTemplate from '../templates/SingleContentLayoutTemplate'
import LoginForm from '../organisms/LoginForm'
// import '../index.css'

export default () => {
  return <OneColumnLayoutTemplate width="w-1/2" content={<LoginForm />} />
}
