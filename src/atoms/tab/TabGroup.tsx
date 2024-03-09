import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AsideTab, GlobalTab, Tab } from './Tab'

interface TabGroupComponent<ID> {
  tabs: Tab<ID>[]
}

export const GlobalTabGroup = <ID,>({ tabs }: TabGroupComponent<ID>) => {
  const navigator = useNavigate()
  const [selectedTabId, setSelectedTabId] = useState<ID>()

  return (
    <div className={`h-full flex justify-center gap-2`}>
      {tabs.map((tab) => {
        return (
          <GlobalTab
            key={tab.id as string}
            id={tab.id}
            isActive={tab.id === selectedTabId}
            text={tab.text}
            onClickTab={(tabId) => {
              setSelectedTabId(tabId)
              navigator(tab.url)
            }}
          />
        )
      })}
    </div>
  )
}

export const AsideTabGroup = <ID,>({ tabs }: TabGroupComponent<ID>) => {
  const navigator = useNavigate()
  const [selectedTabId, setSelectedTabId] = useState<ID>()

  return (
    <div className="flex flex-col">
      {tabs.map((tab) => {
        return (
          <AsideTab
            key={tab.id as string}
            id={tab.id}
            isActive={tab.id === selectedTabId}
            onClickTab={(tabId) => {
              setSelectedTabId(tabId)
              navigator(tab.url)
            }}
            text={tab.text}
          />
        )
      })}
    </div>
  )
}
