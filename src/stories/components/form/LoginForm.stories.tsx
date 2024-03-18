import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from '../../../components/form/LoginForm'

const meta = {
  title: 'form/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
