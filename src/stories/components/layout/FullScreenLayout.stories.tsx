import type { Meta, StoryObj } from '@storybook/react'
import { FullScreenLayout } from '../../../components/layout/FullScreenLayout'

const meta = {
  title: 'layout/FullScreenLayout',
  component: FullScreenLayout,
  tags: ['autodocs'],
  argTypes: {
    bgColor: { name: '배경색 className', defaultValue: '' },
    children: { name: 'children' },
  },
} satisfies Meta<typeof FullScreenLayout>


export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullScreen: Story = {
  args: {
    bgColor: 'bg-amber-200',
  },
}
