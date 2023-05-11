import { ReactNode } from 'react'

export const ScreenGrayBackground = (props: { children?: ReactNode }) => {
  return <div className="h-screen w-screen bg-gray-400">{props?.children}</div>
}

export const CenterContentContainer = (props: { children?: ReactNode }) => {
  return (
    <div className={'flex h-full justify-center items-center'}>
      <div className="p-16 w-3/5 min-w-min h-4/5 min-h-min bg-white rounded-2xl shadow">
        {props?.children}
      </div>
    </div>
  )
}
