import { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent } from 'react'
import { TextInput } from '../../atoms/Input'

const meta = {
  title: 'Atoms/Input/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextInput>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {
    className: 'w-[300px]',
    defaultValue: 'hello',
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)
    },
  },
}
