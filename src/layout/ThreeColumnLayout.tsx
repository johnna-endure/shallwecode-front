import { ReactNode, useRef } from 'react'

interface ThreeColumnLayoutProp {
  /**
   * 기본값 'w-full'
   */
  rootWidth?: string
  /**
   * 기본값 ''
   */
  rootHeight?: string
  /**
   * 기본값 ''
   */
  rootColor?: string
  leftContent?: ReactNode
  centerContent?: ReactNode
  rightContent?: ReactNode
}

export const ThreeColumnLayout = ({
  rootWidth = 'w-full',
  rootHeight = '',
  rootColor = '',
  leftContent,
  centerContent,
  rightContent,
}: ThreeColumnLayoutProp) => {
  const rootClassName = `flex justify-center ${rootWidth} ${rootHeight} ${rootColor}`
  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={rootRef} className={rootClassName}>
      <div className="w-[20%] overflow-clip">{leftContent}</div>
      <div className="w-[60%] overflow-clip">{centerContent}</div>
      <div className="w-[20%]  overflow-clip">{rightContent}</div>
    </div>
  )
}
