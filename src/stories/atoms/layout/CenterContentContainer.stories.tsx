import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CenterContentContainer, ComponentSize } from '../../../atoms/Layout'

const DemoCenterContentContainer = (props: {
  className?: string
  size: ComponentSize
}) => {
  return (
    <div className={`w-screen h-screen bg-gray-300`}>
      <CenterContentContainer className={props?.className} size={props.size} />
    </div>
  )
}

const meta = {
  title: 'Atoms/Layout/CenterContentContainer',
  component: DemoCenterContentContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof DemoCenterContentContainer>

type Story = StoryObj<typeof meta>

export default meta
export const ContentSize: Story = {
  args: {
    className: 'bg-red-500',
    size: {
      width: 'w-3/5',
      height: 'h-4/5',
    },
  },
}

export const AlertMessageSize: Story = {
  args: {
    className: 'bg-red-500',
    size: {
      width: 'w-[350px]',
      height: 'h-[200px]',
    },
  },
}
