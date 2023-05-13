import { Meta, StoryObj } from '@storybook/react'
import { FormInput } from '../../molecules/Form'

const meta = {
  title: 'Molecules/Form/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInput>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {},
}
