import React from "react";

type Props = {
  label: string | React.ReactNode;
  onClick: () => void;
}

export const Button = ({label, onClick}: Props) => {
  return (
    <div className="ui-button" onClick={onClick}>{label}</div>
  )
}