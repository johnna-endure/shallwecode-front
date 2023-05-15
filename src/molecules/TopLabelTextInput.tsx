import { InputProps, TextInput } from '../atoms/Input'
import { Label } from '../atoms/Label'
import { RefObject } from 'react'

interface TopLabelTextInputProps extends InputProps {
  inputRef?: RefObject<HTMLInputElement> | undefined
  labelText: string
  isValid?: boolean
}

export const TopLabelTextInput = (props: TopLabelTextInputProps) => {
  const isValid = props?.isValid ?? true
  const className = `${props?.className} ${
    isValid ? '' : 'border-rose-200 focus:outline-0 focus:border-rose-600'
  }`
  return (
    <>
      <div>
        <Label
          className={'pl-1 pb-1 text-xs font-bold block'}
          text={props.labelText}
        />
        <TextInput {...props} className={className} />
      </div>
    </>
  )
}
