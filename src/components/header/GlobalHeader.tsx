import { ThreeColumnLayout } from '../../atoms/layout/ThreeColumnLayout'
import { HomeBanner } from '../banner/HomeBanner'

interface GlobalHeaderProp {
  isLogged: boolean
}

export const GlobalHeader = ({ isLogged }: GlobalHeaderProp) => {
  const height = 'h-[100px]'
  return (
    <>
      <ThreeColumnLayout
        firstContent={<HomeBanner height={height} />}
        thirdContent={isLogged ? '로그인됨' : '로그인하기'}
        height={height}
      />
    </>
  )
}
