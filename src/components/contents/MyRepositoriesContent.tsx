import { ContentCard } from '../../atoms/container/ContentCard'
import { RoundImage } from '../../atoms/image/Image'
import testImage from '../../assets/test_image.png'

export const MyRepositoriesContent = () => {
  return (
    <div>
      내 리포지토리 컨텐츠
      <RepositoryCard />
    </div>
  )
}

const RepositoryCard = () => {
  return (
    <div className="flex justify-center">
      <ContentCard width="w-[660px]" height="h-[350px]">
        {/*프로필*/}
        <RoundImage imgSrc={testImage} />
      </ContentCard>
    </div>
  )
}
