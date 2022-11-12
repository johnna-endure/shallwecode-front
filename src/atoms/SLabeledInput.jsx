export default ({label, ...props}) => {
    return (
        <div className="flex">
            <label className="inline-block flex flex-col items-start">
                <p className="mb-2">{label}</p>
                <input className="border rounded p-2" {...props}/>
            </label>
        </div>
    )
}