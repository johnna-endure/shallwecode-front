import { InputProps, TextInput } from '../atoms/Input'
import { Label } from '../atoms/Label'
import { RefObject } from 'react'

interface TopLabelTextInputProps extends InputProps {
  inputRef?: RefObject<HTMLInputElement> | undefined
  labelText: string
  isValid?: boolean
  required?: boolean
  className?: string
}

export const TopLabelTextInput = (props: TopLabelTextInputProps) => {
  const isValid = props?.isValid ?? true
  const className = `${props?.className} ${
    isValid ? '' : 'border-rose-200 focus:outline-0 focus:border-rose-600'
  }`
  const defaultRequired = props?.required ?? false
  return (
    <>
      <div>
        <Label
          className={'pl-1 pb-1 text-sm font-bold block'}
          text={props.labelText}
          required={defaultRequired}
        />
        <TextInput {...props} className={className} />
      </div>
    </>
  )
}
