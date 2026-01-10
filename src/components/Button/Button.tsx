import React from "react";

type Props = {
  label: string | React.ReactNode;
  onClick: () => void;
}

const Button = ({label, onClick}: Props) => {
  return (
    <div className="ui-button" onClick={onClick}>{label}</div>
  )
}

export default Button;