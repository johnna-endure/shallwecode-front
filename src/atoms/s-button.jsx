function STextButton ({ className, type = 'submit', value, onClick }) {
  return (
      <input
        className={`px-6 py-2 rounded text-white bg-emerald-700 ${className}`}
        type={type}
        value={value}
        onClick={onClick}
      />
  )
}

function SImageButton (){
    return(
        <></>
    )
}

export {STextButton, SImageButton}
