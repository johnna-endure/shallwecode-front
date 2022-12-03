export default function({items, className}) {
    return (
        <div className={className}>
            {items.map ((item, index) => {
                return (
                    <div className="px-8 py-3 text-left hover:bg-slate-200" key={index}>{item}</div>
                )
            })}
        </div>
    )
}