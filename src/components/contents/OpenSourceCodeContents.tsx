import { RepositoryPostCard } from './card/RepositoryCard'
import { Tag } from '../../atoms/tag/Tag'
import { TagSelect } from './tag/TagSelect'

export const OpenSourceCodeContents = () => {
  return (
    <div className="pt-2 flex flex-col gap-2">
      <div>
        {/*검색바*/}
        <div className="flex justify-center">
          <div>
            <input type="text" placeholder={'검색바'} />
            <button>검색</button>
          </div>
        </div>
        {/*검색 태그 셀렉트*/}
        <TagSelect />

        {/*태그 view*/}
        <div className="flex gap-3">
          <Tag name="태그1" />
          <Tag name="태그2" />
        </div>
      </div>

      {/*리포지토리*/}
      <div className="flex flex-col gap-2 ">
        <RepositoryPostCard />
        <RepositoryPostCard />
        <RepositoryPostCard />
        <RepositoryPostCard />
      </div>
    </div>
  )
}
