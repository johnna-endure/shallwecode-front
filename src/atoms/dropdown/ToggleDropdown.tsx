import { ReactNode, useEffect, useRef, useState } from 'react'

interface ToggleDropdownComponent {
  toggleTarget: ReactNode
  menuList: ReactNode
}

export const ToggleDropdown = ({
  toggleTarget,
  menuList,
}: ToggleDropdownComponent) => {
  const toggleDivElement = useRef<HTMLDivElement>(null)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  useEffect(() => {
    if (toggleDivElement) {
    }
  }, [toggleDivElement])

  return (
    <div className="relative">
      {/*토글 대상 영역*/}
      <div
        ref={toggleDivElement}
        className="cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}>
        <div>{toggleTarget}</div>
      </div>

      {/*드랍다운 리스트*/}
      {showDropdown && <div className="absolute mt-2">{menuList}</div>}
    </div>
  )
}
