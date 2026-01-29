import { MailOutline, LockOutline } from "@mui/icons-material";
import React, { ReactNode } from "react";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name" | "value" | "onChange"
> & {
  label?: string;
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
  type: string;

  errorText?: string;
  warningText?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, onChange, value, errorText, warningText, type, ...props }, ref) => {
    let withIcon:ReactNode|null = null;
    switch(type) {
      case 'email': withIcon = <MailOutline />; break;
      case 'password': withIcon = <LockOutline />; break;
      default:
    }

    let className = 'ui-input';
    if(withIcon) className += ' ui-input--with-icon';

    return (
      <div className={className}>
        {label ? <label htmlFor={name}>{label}</label> : null}

        {withIcon && withIcon}

        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          aria-invalid={!!errorText}
          {...props}
        />

        {errorText ? <div className="ui-error">{errorText}</div> : null}
        {!errorText && warningText ? <div className="ui-warning">{warningText}</div> : null}
      </div>
    )
  }
);
Input.displayName = "Input";
