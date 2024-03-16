import { Image } from '../../../atoms/image/Image'
import { useNavigate } from 'react-router-dom'
import testImage from '../../../assets/test_image.png'

interface HomeBannerComponent {
  width?: string
  height?: string
}

export const HomeBanner = ({
  width = 'w-[100px]',
  height = 'h-[50px]',
}: HomeBannerComponent) => {
  const logoSrc = testImage
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/')
  }
  return (
    <Image width={width} height={height} onClick={onClick} imgSrc={logoSrc} />
  )
}
