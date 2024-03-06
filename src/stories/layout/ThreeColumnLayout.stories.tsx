import type { Meta, StoryObj } from '@storybook/react'
import { ThreeColumnLayout } from '../../layout/ThreeColumnLayout'

const meta = {
  title: 'layout/ThreeColumnLayout',
  component: ThreeColumnLayout,
  tags: ['autodocs'],
  argTypes: {
    rootWidth: { description: '레이아웃 전체 width', defaultValue: 'w-full' },
    rootHeight: { description: '레이아웃 전체 height', defaultValue: '' },
    leftContent: { description: '첫번째 컨텐츠 영역. width: 20%' },
    centerContent: {
      description: '두번째 컨텐츠 영역. max-width: 60%, ',
      defaultValue: undefined,
    },
    rightContent: {
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
  name: '왼쪽 컨텐츠만 가지는 경우',
  args: {
    rootColor: 'bg-amber-200',
    leftContent: <div className="bg-amber-400">왼쪽 영역</div>,
  },
}

export const hasFirstAndSecondContents: Story = {
  name: '왼쪽, 중간 컨텐츠만 가지는 경우',

  args: {
    rootColor: 'bg-amber-200',
    leftContent: <div className="bg-amber-300">왼쪽 영역</div>,
    centerContent: <div className="bg-red-100">중간 영역</div>,
  },
}

export const hasSideContents: Story = {
  name: '양쪽 사이드 컨텐츠만 가지는 경우',
  args: {
    rootColor: 'bg-amber-200',
    leftContent: <div className="bg-amber-300">왼쪽 영역</div>,
    rightContent: <div className="bg-red-100">오른쪽 영역</div>,
  },
}

export const hasOnlyCenter: Story = {
  name: '중간 컨텐츠만 가지는 경우',
  args: {
    rootColor: 'bg-amber-200',
    centerContent: <div className="bg-amber-300">중간 영역</div>,
  },
}

export const hasThreeContents: Story = {
  name: '모든 컨텐츠를 가지는 경우',
  args: {
    rootColor: 'bg-amber-200',
    leftContent: <div className="bg-amber-300 w-[1200px]">왼쪽 영역</div>,
    centerContent: <div className="bg-red-100 w-[1500px]">중간 영역</div>,
    rightContent: <div className="bg-blue-700 w-[1200px]">오른쪽 영역</div>,
  },
}

export const differentHeightSize: Story = {
  name: '각 요소들의 height 가 다른 경우',
  args: {
    rootColor: 'bg-amber-200',
    leftContent: (
      <div className="bg-amber-300 w-[1200px] h-[100px]">왼쪽 영역</div>
    ),
    centerContent: (
      <div className="bg-red-100 w-[1500px] h-[110px]">중간 영역</div>
    ),
    rightContent: (
      <div className="bg-blue-700 w-[1200px] h-[120px]">오른쪽 영역</div>
    ),
  },
}
