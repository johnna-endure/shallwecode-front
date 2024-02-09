import { ReactNode } from 'react'

interface FullScreenContainerProps {
  bgColor: string
  children?: ReactNode
}

export const FullScreenLayout = ({ bgColor = '', children }: FullScreenContainerProps) => {
  return <div className={`w-screen h-screen ${bgColor}`}>
    {children}
  </div>
}
