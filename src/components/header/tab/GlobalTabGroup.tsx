import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export interface TabGroupComponent<ID> {
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

export interface Tab<ID> {
  id: ID
  text: string
  url: string
}

export interface TabComponent<ID> extends Omit<Tab<ID>, 'url'> {
  isActive: boolean
  onClickTab: (tabId: ID) => void
}

const GlobalTab = <ID,>({
  id,
  text,
  isActive,
  onClickTab,
}: TabComponent<ID>) => {
  const activeClass = isActive ? 'border-black' : 'border-white'

  const borderClass = `border-b-2 ${activeClass} hover:border-black`

  return (
    <div
      className={`h-full flex items-center bg-green-300 cursor-pointer ${borderClass} bg-blue-700`}
      onClick={() => onClickTab(id)}>
      <p className="">{text}</p>
    </div>
  )
}
