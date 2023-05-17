import { Meta, StoryObj } from '@storybook/react'
import { Modal } from '../../molecules/Modal'

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {},
}
