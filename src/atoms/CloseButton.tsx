import { ReactComponent as CloseIconGraySvg } from '../assets/ic_round-close-gray.svg'

export const CloseIconGrayButton = (props: {
  className?: string
  onClick?: () => void
}) => {
  return (
    <button
      className={`active:border-2 active:rounded ${props?.className}`}
      onClick={props?.onClick}>
      <CloseIconGraySvg />
    </button>
  )
}
