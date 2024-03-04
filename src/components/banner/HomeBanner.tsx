import { Image } from '../../atoms/image/Image'
import { useNavigate } from 'react-router-dom'
import testImage from '../../assets/test_image.png'

interface HomeBannerProp {
  width?: string
  height?: string
}

export const HomeBanner = ({
  width = 'w-[200px]',
  height = 'h-[100px]',
}: HomeBannerProp) => {
  const logoSrc = testImage
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/')
  }
  return (
    <Image width={width} height={height} onClick={onClick} imgSrc={logoSrc} />
  )
}
