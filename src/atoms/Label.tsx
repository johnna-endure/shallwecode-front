import { ReactNode } from 'react'

export interface LabelProps {
  text: string
  children?: ReactNode | undefined
}

export const Label = (props: LabelProps) => {
  return (
    <>
      <label className={'text-xl'}>
        {props.text}
        {props?.children}
      </label>
    </>
  )
}
