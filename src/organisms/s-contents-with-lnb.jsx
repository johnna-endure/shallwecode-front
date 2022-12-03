import SLnb from "./s-lnb.jsx";

export default function ({items, children}) {
    return (
        <div className="flex w-full">
            <SLnb className="w-1/6" items={items}/>
            <div className="p-2 w-4/6 text-center">
                {children}
            </div>
        </div>

    )
}