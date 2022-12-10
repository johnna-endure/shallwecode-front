export default ({label, className, ...props}) => {
  return (
    <div className={`flex ${className}`}>
      <label className="block flex flex-col items-start w-full">
        <p className="mb-2">{label}</p>
        <input {...props} className="block border rounded p-2 w-full"/>
      </label>
    </div>
  )
}
