import { ReactNode, useRef } from 'react'

interface ThreeColumnLayoutComponent {
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
}: ThreeColumnLayoutComponent) => {
  const rootClassName = `flex justify-center ${rootWidth} ${rootHeight} ${rootColor}`
  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={rootRef} className={rootClassName}>
      <div className="w-[20%]">{leftContent}</div>
      <div className="w-[60%]">{centerContent}</div>
      <div className="w-[20%]">{rightContent}</div>
    </div>
  )
}
