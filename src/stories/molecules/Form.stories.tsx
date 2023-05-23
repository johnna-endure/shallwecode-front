import { Meta, StoryObj } from '@storybook/react'
import { FormField } from '../../molecules/Form'
import { TopLabelTextInput } from '../../molecules/TopLabelTextInput'
import { useRef } from 'react'
import { useValidation } from '../../hooks/useValidation'

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
    <form
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
    </form>
  )
}

const meta = {
  title: 'Molecules/Form/Form',
  component: DemoForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DemoForm>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {},
}
