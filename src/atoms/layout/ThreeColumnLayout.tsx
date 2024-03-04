import { ReactNode, useRef } from 'react'

interface ThreeColumnLayoutProp {
  width?: string
  height?: string
  rootColor?: string
  firstContent: ReactNode
  secondContent?: ReactNode
  thirdContent?: ReactNode
}

export const ThreeColumnLayout = ({
  width = 'w-full',
  height = '',
  rootColor = '',
  firstContent,
  secondContent,
  thirdContent,
}: ThreeColumnLayoutProp) => {
  const rootClassName = `flex justify-between ${width} ${height} ${rootColor}`
  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={rootRef} className={rootClassName}>
      <div className="max-w-max-[20%] overflow-clip">{firstContent}</div>
      <div className="grow min-w-[60%] overflow-clip">{secondContent}</div>
      <div className="max-w-max-[20%] overflow-clip">{thirdContent}</div>
    </div>
  )
}
