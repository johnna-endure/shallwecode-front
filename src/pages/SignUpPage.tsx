import SingleContentLayoutTemplate from '../templates/SingleContentLayoutTemplate'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { FormEvent, FormEventHandler } from 'react'

export default () => {
  return (
    <>
      <SingleContentLayoutTemplate>
        <div>
          <p className="text-xl">패스워드로 회원가입</p>
          <br />
          <p className="text-xl">깃허브로 회원가입</p>
        </div>
      </SingleContentLayoutTemplate>

      <SignupFormModal isOpen={true} />
    </>
  )
}

interface SignupFormModalProps {
  isOpen: boolean
}

const SignupFormModal = (props: SignupFormModalProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('e : ', e)
    console.log('clicked')
  }

  return (
    <Modal className={'h-screen'} show={props.isOpen}>
      <Modal.Header>회원가입</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <TopLabelInput
              htmlFor="email"
              labelText="이메일"
              name="email"
              placeholder="user@email.com"
              required={true}
            />
          </div>
          <div className="mb-2">
            <TopLabelInput
              htmlFor="name"
              labelText="이름"
              name="name"
              placeholder="이름을 입력해주세요"
              required={true}
            />
          </div>
          <div className="mb-2">
            <TopLabelInput
              htmlFor="blogUrl"
              labelText="블로그"
              name="blogUrl"
              placeholder="보여주고 싶은 블로그가 있다면 입력해주세요"
              required={false}
            />
          </div>
          <div className="mb-2">
            <TopLabelInput
              htmlFor="githubUrl"
              labelText="깃허브"
              name="githubUrl"
              placeholder="깃허브"
              required={false}
            />
          </div>
          <div className={'pt-2 flex justify-end'}>
            <Button type={'submit'}>완료</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

interface TextInputProps {
  id?: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}

interface LabelProps {
  htmlFor?: string
  labelText: string
}

interface TopLabelInputProps extends LabelProps, TextInputProps {}

const TopLabelInput = (props: TopLabelInputProps) => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={props.htmlFor} value={props.labelText} />
      </div>
      <TextInput
        id={props?.id}
        name={props.name}
        type={props?.type ?? 'text'}
        placeholder={props?.placeholder}
        required={props?.required ?? false}
      />
    </>
  )
}
