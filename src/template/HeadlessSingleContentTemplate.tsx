import { OneColumnCenterLayout } from '../layout/OneColumnCenterLayout'
import { FullScreenLayout } from '../layout/FullScreenLayout'
import { ReactNode } from 'react'

interface HeadlessSingleContentTemplateProp {
  children?: ReactNode
}

export const HeadlessSingleContentTemplate = ({
  children,
}: HeadlessSingleContentTemplateProp) => {
  return (
    <FullScreenLayout>
      <OneColumnCenterLayout>{children}</OneColumnCenterLayout>
    </FullScreenLayout>
  )
}
