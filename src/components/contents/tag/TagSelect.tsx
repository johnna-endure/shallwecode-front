import { ToggleDropdown } from '../../../atoms/dropdown/ToggleDropdown'
import { WhiteContentContainer } from '../../../atoms/container/WhiteContentContainer'

interface TagSelectComponent {}

export const TagSelect = () => {
  return (
    <ToggleDropdown
      toggleTarget={<button>태그</button>}
      dropDownComponent={
        <WhiteContentContainer>
          {/*태그 검색*/}
          <div className="flex">
            <input type="text" placeholder="태그 검색" />
            <button>검색</button>
          </div>

          {/*검색된 태그 목록*/}
          <div>
            <div>태그1</div>
            <div>태그2</div>
            <div>태그3</div>
          </div>
        </WhiteContentContainer>
      }
    />
  )
}
