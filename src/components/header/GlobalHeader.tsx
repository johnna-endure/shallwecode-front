import { ThreeColumnLayout } from '../../layout/ThreeColumnLayout'
import { HomeBanner } from '../banner/HomeBanner'

interface GlobalHeaderProp {
  height?: string
}

export const GlobalHeader = ({ height = 'h-[50px]' }: GlobalHeaderProp) => {
  const isLogged = false // store 로 빼야된다
  return (
    <>
      <ThreeColumnLayout
        leftContent={
          <div className="w-full h-full bg-amber-50">
            <HomeBanner height={height} />
          </div>
        }
        rightContent={
          <div className={'w-full h-full bg-amber-50'}>
            {isLogged ? '로그인됨' : '로그인하기'}
          </div>
        }
        rootHeight={height}
      />
    </>
  )
}
