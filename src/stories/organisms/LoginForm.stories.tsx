import { Meta, StoryObj } from '@storybook/react'
import { Form, FormField } from '../../molecules/Form'
import { TopLabelTextInput } from '../../molecules/TopLabelTextInput'
import { useRef } from 'react'
import { useValidation } from '../../hooks/useValidation'
import LoginForm from '../../organisms/LoginForm'

const DemoForm = () => {
  const [emailRef, emailValidResult, emailValidator] = useValidation([
    {
      rule: (value) => Boolean(value),
      failureMessage: '이메일을 입력해주세요',
    },
  ])
  const passwordRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        emailValidator()
      }}>
      <FormField
        input={
          <TopLabelTextInput
            inputRef={emailRef}
            name={'email'}
            labelText={'Email'}
            isValid={emailValidResult.isValid}
          />
        }
        failureMessage={emailValidResult.message}
      />
      <FormField
        input={
          <TopLabelTextInput
            inputRef={passwordRef}
            name={'password'}
            labelText={'Password'}
          />
        }
      />
      <FormField
        input={
          <TopLabelTextInput
            inputRef={nameRef}
            name={'name'}
            labelText={'Name'}
          />
        }
      />
      <button
        className={
          'rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        }>
        제출
      </button>
    </Form>
  )
}

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {},
}
