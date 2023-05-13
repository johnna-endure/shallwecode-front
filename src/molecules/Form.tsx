import { FormEventHandler, ReactNode, RefObject, useRef } from 'react'

interface FormProps {
  children?: ReactNode
  rules?: ValidationRule[]
  onSubmit?: FormEventHandler<HTMLFormElement>
}

interface ValidationRule {
  rule: (ref: RefObject<HTMLInputElement>) => boolean
  failureMessage: string
}

export const Form = (props: FormProps) => {
  return <form onSubmit={props.onSubmit}>{props?.children}</form>
}

interface FormInputProps {
  input: ReactNode
}

export const FormInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <>
      <input ref={ref} type={'text'} />
      <p>error msg</p>
    </>
  )
}
