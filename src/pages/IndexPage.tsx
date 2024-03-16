import { ThreeColumnLayout } from '../layout/ThreeColumnLayout'
import { Outlet } from 'react-router-dom'
import React from 'react'
import { AsideTabGroup } from '../components/aside/tab/AsideTabGroup'
import { Tab } from '../components/header/tab/GlobalTabGroup'

export const IndexPage = () => {
  return (
    <ThreeColumnLayout
      rootHeight="h-full"
      leftContent={<LeftAsideTabs />}
      centerContent={
        <div className="w-full h-full bg-amber-700 overflow-hidden overflow-y-scroll">
          메인 컨텐츠
          <Outlet />
        </div>
      }
    />
  )
}

type OpenSourcePageTabId = 'CODE' | 'DOCUMENT' | 'CHALLENGE'
const LeftAsideTabs = () => {
  const tabs: Tab<OpenSourcePageTabId>[] = [
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
