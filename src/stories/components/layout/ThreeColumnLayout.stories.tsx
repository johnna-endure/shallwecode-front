import type { Meta, StoryObj } from '@storybook/react'
import { ThreeColumnLayout } from '../../../components/layout/ThreeColumnLayout'

const meta = {
  title: 'layout/ThreeColumnLayout',
  component: ThreeColumnLayout,
  tags: ['autodocs'],
  argTypes: {
    width: { description: '레이아웃 전체 width', defaultValue: 'w-full' },
    height: { description: '레이아웃 전체 height', defaultValue: '' },
    firstContent: { description: '첫번째 컨텐츠 영역. width: 20%' },
    secondContent: { description: '두번째 컨텐츠 영역. max-width: 60%, ', defaultValue: undefined },
    thirdContent: { description: '세번째 컨텐츠 영역. width: 20%', defaultValue: undefined },
  },
  decorators: Story => (
    <div className="h-screen w-screen bg-black">
      <Story />
    </div>
  ),
} satisfies Meta<typeof ThreeColumnLayout>

export default meta
type Story = StoryObj<typeof meta>;

export const hasFirstContent: Story = {
  args: {
    rootColor: 'bg-amber-200',
    firstContent: <div className="bg-amber-400">
      첫번쨰 영역
    </div>,
  },
}

export const hasTwoContents: Story = {
  args: {
    rootColor: 'bg-amber-200',
    firstContent: <div className="bg-amber-300">
      첫번째 영역
    </div>,
    secondContent: <div className="bg-red-100">
      두번째 영역
    </div>,
  },
}

export const hasThreeContents: Story = {
  args: {
    rootColor: 'bg-amber-200',
    firstContent: <div className="bg-amber-300">
      첫번째 영역
    </div>,
    secondContent: <div className="bg-red-100">
      두번째 영역
    </div>,
    thirdContent: <div className="bg-blue-700">
      세번째 영역
    </div>,
  },
}



