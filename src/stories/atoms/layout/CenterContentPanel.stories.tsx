import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CenterContentPanel, ComponentSize } from '../../../atoms/Layout'

const DemoCenterContentPanel = (props: {
  className?: string
  size: ComponentSize
}) => {
  return (
    <div className={`w-screen h-screen bg-gray-300`}>
      <CenterContentPanel className={props?.className} size={props.size} />
    </div>
  )
}

const meta = {
  title: 'Atoms/Layout/CenterContentPanel',
  component: DemoCenterContentPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof DemoCenterContentPanel>

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
