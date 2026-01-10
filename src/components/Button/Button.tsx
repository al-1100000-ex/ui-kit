import { ReactNode } from "react";

type Props = {
  label: string | ReactNode;
  onClick: () => void;
}

export const Button = ({label, onClick}: Props) => {
  return (
    <div className="ui-button" onClick={onClick}>{label}</div>
  )
}