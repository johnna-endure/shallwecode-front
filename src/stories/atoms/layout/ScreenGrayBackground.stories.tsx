import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FullScreenBackground } from '../../../atoms/Layout'

const meta = {
  title: 'Atoms/Layout/FullScreenBackground',
  component: FullScreenBackground,
  tags: ['autodocs'],
} satisfies Meta<typeof FullScreenBackground>

type Story = StoryObj<typeof meta>

export default meta
export const Basic: Story = {
  args: {},
}

export const GrayBackground = {
  args: {
    color: 'bg-gray-400',
  },
}
