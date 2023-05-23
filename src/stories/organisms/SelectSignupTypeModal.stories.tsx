import { Meta, StoryObj } from '@storybook/react'
import SelectSignupTypeModal from '../../organisms/SelectSignupTypeModal'

const meta = {
  title: 'Organisms/SelectSignupTypeModal',
  component: SelectSignupTypeModal,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectSignupTypeModal>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {
    open: true,
  },
}
