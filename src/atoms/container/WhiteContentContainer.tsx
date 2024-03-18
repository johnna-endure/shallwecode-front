import { ReactNode } from 'react'

interface ContentCardComponent {
  width?: string
  height?: string
  children: ReactNode
}

export const WhiteContentContainer = ({
  width,
  height,
  children,
}: ContentCardComponent) => {
  return (
    <div
      className={`p-2 rounded-2xl shadow-inner shadow-md bg-white ${width} ${height}`}>
      {children}
    </div>
  )
}
