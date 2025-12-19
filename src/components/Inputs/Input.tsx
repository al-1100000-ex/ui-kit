import React from "react";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name" | "value" | "onChange"
> & {
  label?: string;
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;

  errorText?: string;
  warningText?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, onChange, value, errorText, warningText, ...props }, ref) => (
    <div className="ui-input">
      {label ? <label htmlFor={name}>{label}</label> : null}

      <input
        ref={ref}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={!!errorText}
        {...props}
      />

      {errorText ? <div className="ui-error">{errorText}</div> : null}
      {!errorText && warningText ? <div className="ui-warning">{warningText}</div> : null}
    </div>
  )
);
Input.displayName = "Input";
