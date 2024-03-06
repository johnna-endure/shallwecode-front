import { ReactNode } from 'react'

interface OneColumnCenterLayoutProps {
  /**
   * 자식 컨텐츠는 좌우/상하 중앙에 배치된다
   */
  children?: ReactNode
}

export const OneColumnCenterLayout = ({ children }: OneColumnCenterLayoutProps) => {
  return <div className="w-full h-full flex justify-center items-center">
    {children}
  </div>
}


