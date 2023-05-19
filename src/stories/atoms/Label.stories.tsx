import { Meta, StoryObj } from '@storybook/react'
import React, { ChangeEvent, ReactNode } from 'react'
import { Label } from '../../atoms/Label'
import { TextInput } from '../../atoms/Input'

const meta = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {
    text: 'this is label : ',
    children: <TextInput name={'test'} defaultValue={'hello'} />,
  },
}
