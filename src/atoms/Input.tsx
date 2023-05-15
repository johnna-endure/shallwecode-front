import { ChangeEventHandler, forwardRef, Ref, RefObject } from 'react'

export interface InputProps {
  inputRef?: RefObject<HTMLInputElement> | undefined
  type?: string
  className?: string
  name: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  defaultValue?: string | number | readonly string[] | undefined
  value?: string | number | readonly string[] | undefined
}

export const TextInput = (props: InputProps) => (
  <>
    <input
      ref={props?.inputRef}
      className={`px-2 h-8 bg-white border-2 border-blue-200 rounded focus:outline-0 focus:border-blue-600 ${props?.className}`}
      type={props?.type ?? 'text'}
      name={props.name}
      defaultValue={props?.defaultValue}
      value={props?.value}
      onChange={props?.onChange}
    />
  </>
)
