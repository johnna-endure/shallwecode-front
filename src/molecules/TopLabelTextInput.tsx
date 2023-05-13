import { InputProps, TextInput } from '../atoms/Input'
import { Label } from '../atoms/Label'

interface TopLabelTextInputProps extends InputProps {
  labelText: string
}

export const TopLabelTextInput = (props: TopLabelTextInputProps) => {
  return (
    <>
      <div>
        <Label
          className={'pl-1 pb-1 text-xs font-bold block'}
          text={props.labelText}
        />
        <TextInput {...props} />
      </div>
    </>
  )
}
