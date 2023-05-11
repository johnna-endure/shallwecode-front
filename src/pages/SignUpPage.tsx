import SingleContentLayoutTemplate from '../templates/SingleContentLayoutTemplate'
import React, { FormEvent, LegacyRef, useRef, useState } from 'react'
import SignupFormModal from './SignupFormModal'
import { SignupType } from '../organisms/SignupForm'
import { userApi } from '../apis/user/userApi'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()

  const [showSignupModal, setShowSignupModal] = useState(false)
  const [signupType, setSignupType] = useState<SignupType>()
  const [signupHandler, setSignupHandler] = useState(() => () => {})

  const openPasswordSignupModal = () => {
    setSignupType('password')
    setShowSignupModal(true)

    setSignupHandler(() => (e: FormEvent<HTMLFormElement>) => {
      const formData = new FormData(e.currentTarget)
      const body = JSON.stringify(Object.fromEntries(formData.entries()))
      userApi
        .postPasswordSignup(body, 'password')
        .then((_) => {
          alert('가입 성공')
          navigate('/')
        })
        .catch((err) => {
          console.error(err)
          alert('가입 실패')
        })
    })
  }
  const openGithubSignupModal = () => {
    setSignupType('github')
    setShowSignupModal(true)
  }

  const handleSubmitPasswordSignUp = (e: FormEvent) => {}

  return (
    <>
      <SingleContentLayoutTemplate>
        <div>
          <p className="text-xl" onClick={openPasswordSignupModal}>
            패스워드로 회원가입
          </p>
          <br />
          <p className="text-xl" onClick={openGithubSignupModal}>
            깃허브로 회원가입
          </p>
        </div>
      </SingleContentLayoutTemplate>
    </>
  )
}
