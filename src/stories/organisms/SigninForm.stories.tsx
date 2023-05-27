import { Meta, StoryObj } from '@storybook/react'
import SigninForm from '../../organisms/SigninForm'

const meta = {
  title: 'Organisms/SigninForm',
  component: SigninForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SigninForm>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {},
}