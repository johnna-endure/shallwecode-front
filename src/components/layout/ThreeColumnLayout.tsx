// const testImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/40/Image_test.png'

import { ReactNode } from 'react'

interface ThreeColumnLayoutProp {
  width?: string
  height?: string
  rootColor?: string
  firstContent: ReactNode
  secondContent?: ReactNode
  thirdContent?: ReactNode
}

export const ThreeColumnLayout = (
  {
    width = 'w-full',
    height = '',
    rootColor = '',
    firstContent,
    secondContent,
    thirdContent,
  }: ThreeColumnLayoutProp) => {
  const rootClassName = `flex justify-between ${width} ${height} ${rootColor}`

  return <div className={rootClassName}>
    <div className="w-1/5 overflow-clip">{firstContent}</div>
    <div className="grow max-w-[60%] overflow-clip">{secondContent}</div>
    <div className="w-1/5 overflow-clip">{thirdContent}</div>
  </div>
}

