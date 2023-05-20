import { ReactComponent as CloseIconGraySvg } from "../assets/ic_round-close-gray.svg";

export const CloseIconGray = (props: { className?: string, onClick?: () => {} }) => {
  return <CloseIconGraySvg className={props?.className} onClick={props?.onClick} />;
};
