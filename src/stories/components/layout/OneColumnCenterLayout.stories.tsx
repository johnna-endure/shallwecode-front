import type { Meta, StoryObj } from '@storybook/react'
import { OneColumnCenterLayout } from '../../../components/layout/OneColumnCenterLayout'

const meta = {
  title: 'layout/OneColumnCenterLayout',
  component: OneColumnCenterLayout,
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'children', description: '자식 컨텐츠는 좌우/상하 중앙에 배치된다' },
  },
  decorators: Story => (
    <div className="h-screen w-screen">
      <Story />
    </div>
  ),
} satisfies Meta<typeof OneColumnCenterLayout>

export default meta
type Story = StoryObj<typeof meta>;

export const hasBlackSingleContent: Story = {
  args: {
    children: <div className="bg-black w-[200px] h-full"></div>,
  },
}
