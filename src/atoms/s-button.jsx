export default ({ className, type = 'submit', value, onClick }) => {
  return (
    <div>
      <input
        className={`px-6 py-2 rounded text-white ${className}`}
        type={type}
        value={value}
        onClick={onClick}
      />
    </div>
  )
}
