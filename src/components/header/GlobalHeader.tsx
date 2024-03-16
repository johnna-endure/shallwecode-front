import { ThreeColumnLayout } from '../../layout/ThreeColumnLayout'
import { HomeBanner } from './banner/HomeBanner'
import { GlobalTabGroup, Tab } from './tab/GlobalTabGroup'
import { RoundImage } from '../../atoms/image/Image'
import testImage from '../../assets/test_image.png'
import React from 'react'
import { ToggleDropdown } from '../../atoms/dropdown/ToggleDropdown'
import { useNavigate } from 'react-router-dom'

type GlobalTabId = 'openSource' | 'community'

interface GlobalHeaderComponent {
  height?: string
}

export const GlobalHeader = ({
  height = 'h-[50px]',
}: GlobalHeaderComponent) => {
  const navigator = useNavigate()
  const isLogged = true // store 로 빼야된다

  const tabs: Tab<GlobalTabId>[] = [
    { id: 'openSource', text: '오픈소스', url: '/code' },
  ]

  return (
    <>
      <ThreeColumnLayout
        rootHeight={height}
        leftContent={
          <div className="w-full h-full bg-amber-50">
            <HomeBanner height={height} />
          </div>
        }
        centerContent={<GlobalTabGroup tabs={tabs} />}
        rightContent={
          <div className={'flex w-full h-full bg-red-100'}>
            {isLogged ? (
              <ToggleDropdown
                toggleTarget={
                  <div className="flex items-center gap-2">
                    {/*이미지*/}

                    <div className="mx-1">
                      <RoundImage
                        imgSrc={testImage}
                        width="w-[42px]"
                        height="h-[42px]"
                      />
                    </div>

                    {/*컨텐츠*/}
                    <div>최우석</div>
                  </div>
                }
                menuList={
                  <div className="z-20">
                    <div onClick={() => navigator('/my/profile')}>프로필</div>
                    <div onClick={() => navigator('/my/repositories')}>
                      내 리포지토리
                    </div>
                    <div>로그아웃</div>
                  </div>
                }
              />
            ) : (
              '로그인하기'
            )}
          </div>
        }
      />
    </>
  )
}
