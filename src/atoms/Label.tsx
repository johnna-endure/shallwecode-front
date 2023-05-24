import { ReactNode } from 'react'

export interface LabelProps {
  className?: string | undefined
  text: string
  children?: ReactNode | undefined
  required?: boolean
}

export const Label = (props: LabelProps) => {
  const defaultRequired = props?.required ?? false
  return (
    <>
      <label className={`text-xl ${props?.className}`}>
        {defaultRequired && <span className="text-red-400 mr-1">*</span>}
        {props.text}
        {props?.children}
      </label>
    </>
  )
}
