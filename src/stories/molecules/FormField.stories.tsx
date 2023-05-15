import { Meta, StoryObj } from '@storybook/react'
import { FormField } from '../../molecules/Form'
import { TopLabelTextInput } from '../../molecules/TopLabelTextInput'

const meta = {
  title: 'Molecules/Form/FormInput',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormField>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {
    input: <TopLabelTextInput name={'password'} labelText={'password'} />,
  },
}

export const ValidationFailed: Story = {
  args: {
    input: (
      <TopLabelTextInput
        name={'password'}
        labelText={'password'}
        isValid={false}
      />
    ),
    failureMessage: '비밀번호는 8자리 이상이여야 합니다',
  },
}
