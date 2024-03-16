import { Outlet } from 'react-router-dom'
import { ThreeColumnLayout } from '../layout/ThreeColumnLayout'
import React from 'react'
import { Tab } from '../components/header/tab/GlobalTabGroup'
import { AsideTabGroup } from '../components/aside/tab/AsideTabGroup'

export const MyPage = () => {
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

type MyPageTabId = 'PROFILE' | 'MY_REPOSITORIES'
const LeftAsideTabs = () => {
  const tabs: Tab<MyPageTabId>[] = [
    {
      id: 'PROFILE',
      url: 'profile',
      text: '프로필',
    },
    {
      id: 'MY_REPOSITORIES',
      url: 'repositories',
      text: '내 리포지토리',
    },
  ]
  return (
    <div className="flex flex-col">
      내 페이지 카테고리
      <AsideTabGroup tabs={tabs} />
    </div>
  )
}
