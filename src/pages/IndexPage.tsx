import { ThreeColumnLayout } from '../layout/ThreeColumnLayout'
import { Outlet, useNavigate } from 'react-router-dom'
import { AsideTabGroup } from '../atoms/tab/TabGroup'
import { Tab } from '../atoms/tab/Tab'

export const IndexPage = () => {
  return (
    <ThreeColumnLayout
      rootHeight="h-full"
      leftContent={<LeftAsideTabs />}
      centerContent={
        <div className="w-full h-full bg-amber-700">
          메인 컨텐츠
          <Outlet />
        </div>
      }
    />
  )
}

type OpenSourceTabId = 'CODE' | 'DOCUMENT' | 'CHALLENGE'
const LeftAsideTabs = () => {
  const tabs: Tab<OpenSourceTabId>[] = [
    {
      id: 'CODE',
      url: 'code',
      text: 'CODE',
    },
    {
      id: 'DOCUMENT',
      url: 'document',
      text: 'DOCUMENT',
    },
  ]
  return (
    <div className="flex flex-col">
      카테고리 대분류
      <AsideTabGroup tabs={tabs} />
    </div>
  )
}
