import SingleContentLayoutTemplate from '../templates/SingleContentLayoutTemplate'
import React, { FormEvent, useState } from 'react'
import SignupFormModal from './SignupFormModal'
import { SignupType } from '../organisms/SignupForm'

export default () => {
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [signupType, setSignupType] = useState<SignupType>()
  const handleClickPasswordSignup = () => {
    //
    setSignupType('password')
    setShowSignupModal(true)
  }
  const handleClickGithubSignup = () => {
    setSignupType('github')
    setShowSignupModal(true)
  }

  return (
    <>
      <SingleContentLayoutTemplate>
        <div>
          <p className="text-xl" onClick={handleClickPasswordSignup}>
            패스워드로 회원가입
          </p>
          <br />
          <p className="text-xl" onClick={handleClickGithubSignup}>
            깃허브로 회원가입
          </p>
        </div>
      </SingleContentLayoutTemplate>
      <SignupFormModal
        show={showSignupModal}
        signType={signupType}
        onClose={() => {
          setShowSignupModal(false)
          setSignupType(null)
        }}
        onSubmit={(e: FormEvent) => {}}
      />
    </>
  )
}
