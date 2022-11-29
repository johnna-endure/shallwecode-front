export default ({label, className, ...props}) => {
  return (
    <div className={`flex ${className}`}>
      <label className="inline-block flex flex-col items-start">
        <p className="mb-2">{label}</p>
        <input {...props} className="border rounded p-2"/>
      </label>
    </div>
  )
}
