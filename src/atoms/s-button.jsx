function STextButton ({ className, type = 'submit', value, onClick, ...props }) {
  return (
      <input
        className={`px-6 py-2 rounded text-white bg-emerald-700 ${className}`}
        type={type}
        value={value}
        onClick={onClick}
        {...props}
      />
  )
}

function SImageButton (){
    return(
        <></>
    )
}

export {STextButton, SImageButton}
