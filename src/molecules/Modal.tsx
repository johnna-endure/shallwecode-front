import { ReactNode } from 'react'
import {
  CenterContentPanel,
  ComponentSize,
  FullScreenBackground,
} from '../atoms/Layout'
import { CloseIconGray } from '../atoms/CloseIcon'

interface ModalProps {
  open: boolean
  size: ComponentSize
  title?: string
  showCloseButton?: boolean
  children?: ReactNode
  onCancel?: () => {}
}

export const Modal = (props: ModalProps) => {
  const defaultShowCloseButton = props?.showCloseButton ?? true
  return (
    <FullScreenBackground color={'bg-gray-400'}>
      <CenterContentPanel size={props.size}>
        {/*닫기 버튼*/}
        {defaultShowCloseButton && (
          <div className={'flex justify-between'}>
            <p className={'ml-2 text-xl font-bold'}>{props?.title}</p>
            <CloseIconGray onClick={props?.onCancel} />
          </div>
        )}
        {/*모달 컨텐츠 영역*/}
        <div className={'p-4 w-full h-5/6 overflow-y-scroll'}>
          {props?.children}
        </div>
      </CenterContentPanel>
    </FullScreenBackground>
  )
}
