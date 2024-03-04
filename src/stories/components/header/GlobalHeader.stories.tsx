import type { Meta, StoryObj } from '@storybook/react'
import { GlobalHeader } from '../../../components/header/GlobalHeader'

const meta = {
  title: 'header/GlobalHeader',
  component: GlobalHeader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GlobalHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { isLogged: true },
}
