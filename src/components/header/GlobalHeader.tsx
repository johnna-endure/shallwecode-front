import { ThreeColumnLayout } from '../../layout/ThreeColumnLayout'
import { HomeBanner } from '../banner/HomeBanner'
import { GlobalTabGroup } from '../../atoms/tab/TabGroup'
import { GlobalTab, Tab, TabComponent } from '../../atoms/tab/Tab'

type GlobalTabId = 'openSource' | 'community'

interface GlobalHeaderComponent {
  height?: string
}

export const GlobalHeader = ({
  height = 'h-[50px]',
}: GlobalHeaderComponent) => {
  const isLogged = true // store 로 빼야된다

  const tabs: Tab<GlobalTabId>[] = [
    { id: 'openSource', text: '오픈소스', url: '/' },
    // { id: 'community', text: '커뮤니티', url: '/' },
  ]

  return (
    <>
      <ThreeColumnLayout
        leftContent={
          <div className="w-full h-full bg-amber-50">
            <HomeBanner height={height} />
          </div>
        }
        centerContent={<GlobalTabGroup tabs={tabs} />}
        rightContent={
          <div className={'w-full h-full bg-red-100'}>
            {isLogged ? '내 정보' : '로그인하기'}
          </div>
        }
        rootHeight={height}
      />
    </>
  )
}
