import { FormEventHandler, ReactNode, RefObject } from 'react'

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

interface FormFieldProps {
  input: ReactNode
  failureMessage?: string | undefined
}

/**
 * input 이 validation 실패할 경우 보여줄 에러 메세지를 포함한 컴포넌트
 * input validation border 변경의 책임은 input Element 자체에 있다.
 */
export const FormField = (props: FormFieldProps) => {
  return (
    <>
      {props.input}
      <p className="pl-1 pt-1 text-xs text-red-400 block">
        {props?.failureMessage}
      </p>
    </>
  )
}
