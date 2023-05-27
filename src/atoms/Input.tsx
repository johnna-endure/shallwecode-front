import { ChangeEventHandler, forwardRef, Ref, RefObject } from 'react'

export interface InputProps {
  inputRef?: RefObject<HTMLInputElement> | undefined
  type?: string
  className?: string
  name: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  defaultValue?: string | number | readonly string[] | undefined
  value?: string | number | readonly string[] | undefined
  placeholder?: string
  required?: boolean
}

export const TextInput = (props: InputProps) => (
  <>
    <input
      ref={props?.inputRef}
      className={`rounded border border-[#D9D9D9] p-3 focus:outline-0 focus:border-[#00c473] ${props?.className}`}
      type={props?.type ?? 'text'}
      name={props.name}
      defaultValue={props?.defaultValue}
      value={props?.value}
      onChange={props?.onChange}
      placeholder={props?.placeholder}
      required={props?.required}
    />
  </>
)
