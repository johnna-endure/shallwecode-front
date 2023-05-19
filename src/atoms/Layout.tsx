import { ReactNode } from 'react'

export interface ComponentSize {
  width: string
  height: string
}

export const ScreenGrayBackground = (props: { children?: ReactNode }) => {
  return <div className="h-screen w-screen bg-gray-400">{props?.children}</div>
}

export const FullScreenBackground = (props: {
  color?: string
  children?: ReactNode
}) => {
  const colorWithDefault = props?.color ?? 'bg-white'
  return (
    <div className={`h-screen w-screen ${colorWithDefault}`}>
      {props?.children}
    </div>
  )
}

export const CenterContentContainer = (props: {
  className?: string
  children?: ReactNode
  size: ComponentSize
}) => {
  return (
    <div className={'flex w-full h-full justify-center items-center'}>
      <div
        className={`p-16 ${props.size.width} ${props.size.height} min-w-min min-h-min bg-white rounded-2xl shadow ${props?.className}`}>
        {props?.children}
      </div>
    </div>
  )
}
