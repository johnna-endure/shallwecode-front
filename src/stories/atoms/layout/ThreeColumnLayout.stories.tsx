import type { Meta, StoryObj } from '@storybook/react'
import { ThreeColumnLayout } from '../../../atoms/layout/ThreeColumnLayout'

const meta = {
  title: 'atoms/layout/ThreeColumnLayout',
  component: ThreeColumnLayout,
  tags: ['autodocs'],
  argTypes: {
    width: { description: '레이아웃 전체 width', defaultValue: 'w-full' },
    height: { description: '레이아웃 전체 height', defaultValue: '' },
    firstContent: { description: '첫번째 컨텐츠 영역. width: 20%' },
    secondContent: {
      description: '두번째 컨텐츠 영역. max-width: 60%, ',
      defaultValue: undefined,
    },
    thirdContent: {
      description: '세번째 컨텐츠 영역. width: 20%',
      defaultValue: undefined,
    },
  },
  decorators: (Story) => (
    <div className="h-screen w-screen bg-black">
      <Story />
    </div>
  ),
} satisfies Meta<typeof ThreeColumnLayout>

export default meta
type Story = StoryObj<typeof meta>

export const hasFirstContent: Story = {
  name: '첫째 컨텐츠만 가지는 경우',
  args: {
    rootColor: 'bg-amber-200',
    firstContent: <div className="bg-amber-400">첫번쨰 영역</div>,
  },
}

export const hasFirstAndSecondContents: Story = {
  name: '첫째, 둘째 컨텐츠만 가지는 경우',

  args: {
    rootColor: 'bg-amber-200',
    firstContent: <div className="bg-amber-300">첫번째 영역</div>,
    secondContent: <div className="bg-red-100">두번째 영역</div>,
  },
}

export const hasSideContents: Story = {
  name: '첫째, 셋째 컨텐츠만 가지는 경우',
  args: {
    rootColor: 'bg-amber-200',
    firstContent: <div className="bg-amber-300">첫번째 영역</div>,
    thirdContent: <div className="bg-red-100">세번째 영역</div>,
  },
}

export const hasThreeContents: Story = {
  name: '모든 컨텐츠를 가지는 경우',
  args: {
    rootColor: 'bg-amber-200',
    firstContent: <div className="bg-amber-300 w-[1200px]">첫번째 영역</div>,
    secondContent: <div className="bg-red-100 w-[500px]">두번째 영역</div>,
    thirdContent: <div className="bg-blue-700 w-[1200px]">세번째 영역</div>,
  },
}

export const differentHeightSize: Story = {
  name: '각 요소들의 사이즈가 다른 경우',
  args: {
    rootColor: 'bg-amber-200',
    firstContent: (
      <div className="bg-amber-300 w-[1200px] h-[100px]">첫번째 영역</div>
    ),
    secondContent: (
      <div className="bg-red-100 w-[500px] h-[110px]">두번째 영역</div>
    ),
    thirdContent: (
      <div className="bg-blue-700 w-[1200px] h-[120px]">세번째 영역</div>
    ),
  },
}
