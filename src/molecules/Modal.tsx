import {
  CenterContentPanel,
  ComponentSize,
  FullScreenBackground,
} from '../atoms/Layout'
import { ReactNode } from 'react'

export const Modal = (props: { size: ComponentSize; children?: ReactNode }) => {
  return (
    <FullScreenBackground color={'bg-gray-400'}>
      <CenterContentPanel size={props.size}>
        {props?.children}
      </CenterContentPanel>
    </FullScreenBackground>
  )
}
