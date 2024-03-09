import { ReactNode } from 'react'

interface FullScreenLayoutComponent {
  bgColor?: string
  children?: ReactNode
}

export const FullScreenLayout = ({
  bgColor = '',
  children,
}: FullScreenLayoutComponent) => {
  return <div className={`w-screen h-screen ${bgColor}`}>{children}</div>
}
