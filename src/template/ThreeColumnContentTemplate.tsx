import { FullScreenLayout } from '../layout/FullScreenLayout'
import { ThreeColumnLayout } from '../layout/ThreeColumnLayout'
import { ReactNode } from 'react'
import { GlobalHeader } from '../components/header/GlobalHeader'

interface ThreeColumnContentTemplateProp {
  leftContent?: ReactNode
  centerContent?: ReactNode
  rightContent?: ReactNode
}

export const ThreeColumnContentTemplate = ({
  leftContent,
  centerContent,
  rightContent,
}: ThreeColumnContentTemplateProp) => {
  return (
    <FullScreenLayout>
      {/*헤더 영역*/}
      <div className="w-full h-[50px] bg-red-100">
        <GlobalHeader />
      </div>
      {/*컨텐츠 영역*/}
      <div className="w-full h-[calc(100%-50px)] bg-amber-700">
        <ThreeColumnLayout
          rootHeight="h-full"
          leftContent={leftContent}
          centerContent={centerContent}
          rightContent={rightContent}
        />
      </div>
    </FullScreenLayout>
  )
}
