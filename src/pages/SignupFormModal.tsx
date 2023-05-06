import React, { FormEvent, FormEventHandler } from 'react'
import { Modal } from 'flowbite-react'
import SignupForm, { SignupType } from '../organisms/SignupForm'

interface SignupFormModalProps {
  show: boolean
  dismissible?: boolean
  signType: SignupType
  onClose: () => void
  onSubmit: FormEventHandler<HTMLFormElement>
}

export default (props: SignupFormModalProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Modal
      className={'h-screen'}
      show={props.show}
      dismissible={props?.dismissible ?? false}
      onClose={props.onClose}>
      <Modal.Header>회원가입</Modal.Header>
      <Modal.Body>
        <SignupForm signType={props?.signType} onSubmit={props.onSubmit} />
      </Modal.Body>
    </Modal>
  )
}
