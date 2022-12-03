import SHeader from '../organisms/s-header.jsx'
import SContentsWithLnb from '../organisms/s-contents-with-lnb.jsx'
import {STextButton} from "../atoms/s-button.jsx";

export default function({lnbSampleData, sampleData}) {
    return (
        <div>
            <SHeader/>
            <SContentsWithLnb items={lnbSampleData} children={sampleData}/>
            <STextButton
            className="fixed right-6 bottom-5 rounded-full drop-shadow-lg text-emerald-600 bg-slate-50"
            type="button"
            value="글쓰기"
            onClick={() => alert('글쓰기 클릭')}
            />
        </div>
    )
}