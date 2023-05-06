import { Label, TextInput } from 'flowbite-react'
import { LabelProps } from '../atoms/Label'
import { TextInputProps } from '../atoms/Input'

export interface TopLabelInputProps extends LabelProps, TextInputProps {}

export const TopLabelInput = (props: TopLabelInputProps) => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={props.htmlFor} value={props.labelText} />
      </div>
      <TextInput
        id={props?.id}
        name={props.name}
        type={props?.type ?? 'text'}
        placeholder={props?.placeholder}
        required={props?.required ?? false}
      />
    </>
  )
}
