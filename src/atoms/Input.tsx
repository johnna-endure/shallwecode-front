import { ChangeEventHandler } from 'react'

interface InputProps {
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  defaultValue?: string | number | readonly string[] | undefined
  value?: string | number | readonly string[] | undefined
}

export const TextInput = (props: InputProps) => {
  return (
    <>
      <input
        className={`h-8 bg-white border-2 border-blue-200 rounded focus:outline-0 focus:border-blue-600 ${props?.className}`}
        type="text"
        defaultValue={props?.defaultValue}
        value={props?.value}
        onChange={props?.onChange}
      />
    </>
  )
}
