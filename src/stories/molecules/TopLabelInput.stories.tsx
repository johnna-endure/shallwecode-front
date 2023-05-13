import { Meta, StoryObj } from '@storybook/react'
import { TopLabelTextInput } from '../../molecules/TopLabelTextInput'

const meta = {
  title: 'Molecules/TopLabelTextInput',
  component: TopLabelTextInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TopLabelTextInput>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {
    labelText: 'Label',
  },
}
