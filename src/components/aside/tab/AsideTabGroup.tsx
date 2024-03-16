import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  TabComponent,
  TabGroupComponent,
} from '../../header/tab/GlobalTabGroup'

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

export const AsideTab = <ID,>({
  id,
  text,
  isActive,
  onClickTab,
}: TabComponent<ID>) => {
  const bgColorClass = `hover:bg-blue-700 ${
    isActive ? 'bg-blue-700' : 'bg-white'
  }`

  return (
    <div
      className={`h-full flex items-center cursor-pointer ${bgColorClass}`}
      onClick={() => onClickTab(id)}>
      <p className="">{text}</p>
    </div>
  )
}
