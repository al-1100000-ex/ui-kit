import { ReactNode } from "react";

type Props = {
  label: string | ReactNode;
  onClick?: () => void;
  customizable?: boolean;
}

export const Button = ({label, onClick, customizable = false}: Props) => {
  return (
    <div className={`ui-button ${customizable ? 'ui-button--customizable' : ''}`} onClick={onClick}>{label}</div>
  )
}