import SLabeledInput from "../atoms/s-labeled-input";

export default function () {
    return(
        <div className="flex w-full h-full">
            <div className="m-auto w-3/4">
                <div className="mb-14 text-3xl font-bold">글 작성하기</div>
                <SLabeledInput className="mb-10" label="제목"/>

                <label>
                    <p className="mb-2">내용</p>
                    <textarea className="p-2 border rounded w-full h-60"/>
                </label>

                <div className="flex justify-end mt-2">
                    <input className="px-3 py-2 bg-emerald-500 text-white rounded mr-2" type="button" value="취소" name="create" />
                    <input className="px-3 py-2 bg-emerald-500 text-white rounded" type="button" value="등록" name="create" onClick={() => alert('등록되었습니다')} />
                </div>

            </div>
        </div>
    )
}