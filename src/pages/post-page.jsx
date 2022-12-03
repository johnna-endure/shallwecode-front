import PostTemplate from "../templates/post-template.jsx";

const lnbSampleData = ['lnb-1', 'lnb-2', 'lnb-3']
const sampleData =<div className="border-2 border-amber-400 rounded h-60 leading-[200px]">
    컨텐츠
</div>

export default function() {
    return(
        <PostTemplate lnbSampleData={lnbSampleData} sampleData={sampleData}/>
    )
}