import { ReactNode } from 'react'

export interface LabelProps {
  className?: string | undefined
  text: string
  children?: ReactNode | undefined
}

export const Label = (props: LabelProps) => {
  return (
    <>
      <label className={`text-xl ${props?.className}`}>
        {props.text}
        {props?.children}
      </label>
    </>
  )
}
