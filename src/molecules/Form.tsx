import { FormEventHandler, ReactNode, RefObject } from 'react'

interface FormProps {
  /**
   * 폼 내부 컴포넌트
   */
  children?: ReactNode
  /**
   * submit 이벤트
   */
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export const Form = (props: FormProps) => {
  return <form onSubmit={props.onSubmit}>{props?.children}</form>
}

interface FormFieldProps {
  /**
   * input 역할의 컴포넌트
   */
  input: ReactNode
  /**
   * validation 실패 메세지
   */
  failureMessage?: string | undefined
}

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
