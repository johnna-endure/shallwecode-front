import {
  CenterContentContainer,
  ComponentSize,
  FullScreenBackground,
} from '../atoms/Layout'

export const Modal = (props: { size: ComponentSize }) => {
  return (
    <FullScreenBackground color={'bg-gray-400'}>
      <CenterContentContainer size={props.size} />
    </FullScreenBackground>
  )
}
