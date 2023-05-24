import { Meta, StoryObj } from '@storybook/react'
import SignupForm from '../../organisms/SignupForm'

const meta = {
  title: 'Organisms/SignupForm',
  component: SignupForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SignupForm>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {},
}
