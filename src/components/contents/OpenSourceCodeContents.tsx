import { RepositoryPostCard } from './card/RepositoryCard'

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
        <div className="flex gap-2">
          <select>
            <option>태그</option>
          </select>
          <select>
            <option>기술 스택</option>
          </select>
        </div>

        {/*태그 view*/}
        <div className="flex gap-3">
          <div>태그1</div>
          <div>태그2</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <RepositoryPostCard />
        <RepositoryPostCard />
        <RepositoryPostCard />
        <RepositoryPostCard />
      </div>
    </div>
  )
}
