import { WhiteContentContainer } from '../../../atoms/container/WhiteContentContainer'
import { RoundImage } from '../../../atoms/image/Image'
import testImage from '../../../assets/test_image.png'

export const RepositoryPostCard = () => {
  return (
    <div className="flex justify-center">
      <WhiteContentContainer width="w-[660px]" height="h-[350px]">
        <div className="flex flex-col justify-between h-full">
          {/*헤더*/}
          <div className="h-[50px] flex justify-between items-center border-b border-black">
            <div className="flex items-center gap-2">
              <RoundImage imgSrc={testImage} />
              <div>최우석</div>
            </div>
            <div>스타 이미지</div>
          </div>

          {/*컨텐츠*/}
          <div className="h-[200px] bg-red-100">
            <div>컨텐츠</div>
            <div>컨텐츠</div>
            <div>컨텐츠</div>
          </div>

          {/*푸터*/}
          <div className="h-[50px] flex justify-between items-center bg-green-300 border-t border-black">
            {/*해시태그*/}
            <div>#태그</div>
            <div>댓글수 3, 조회수 10</div>
          </div>
        </div>
      </WhiteContentContainer>
    </div>
  )
}
