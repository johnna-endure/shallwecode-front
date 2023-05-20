import { ReactNode } from 'react'

export interface ComponentSize {
  width: string
  height: string
}

export const FullScreenBackground = (props: {
  color?: string
  opacity?: string
  children?: ReactNode
}) => {
  const colorWithDefault = props?.color ?? 'bg-white'
  return (
    <>
      <div
        className={`absolute top-0 left-0 h-screen w-screen ${colorWithDefault} ${props?.opacity}`}>
        {props?.children}
      </div>
    </>
  )
}

export const CenterContentPanel = (props: {
  className?: string
  children?: ReactNode
  size?: ComponentSize
  shadow?: boolean
}) => {
  const defaultShadow = props?.shadow ? 'shadow' : ''
  return (
    <div className={'flex w-full h-full justify-center items-center'}>
      <div
        className={`p-4 min-w-min min-h-min bg-white rounded-2xl 
        ${props.size?.width} ${props.size?.height}
        ${defaultShadow} ${props?.className}`}>
        {props?.children}
      </div>
    </div>
  )
}
