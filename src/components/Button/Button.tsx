import { ReactNode } from "react";

type Props = {
  label: string | ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary' | 'blue' | 'danger';
}

export const Button = ({
                         label,
                         onClick,
                         disabled = false,
                         type = 'primary'
                       }: Props
) => {
  let classNames = ['ui-button'];
  if (!disabled) classNames.push(`ui-button--${type}`);
  if (disabled) classNames.push('ui-button--disabled');

  const className = classNames.join(' ');

  return (
    <div className={className} onClick={onClick}>{label}</div>
  )
}