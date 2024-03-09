export interface Tab<ID> {
  id: ID
  text: string
  url: string
}

export interface TabComponent<ID> extends Omit<Tab<ID>, 'url'> {
  isActive: boolean
  onClickTab: (tabId: ID) => void
}

export const GlobalTab = <ID,>({
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
      className={`h-full flex items-center bg-green-300 cursor-pointer ${bgColorClass}`}
      onClick={() => onClickTab(id)}>
      <p className="">{text}</p>
    </div>
  )
}
