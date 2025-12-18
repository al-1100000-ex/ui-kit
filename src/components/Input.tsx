import React, { ChangeEvent } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  onChange: (key: string, value: string) => void;
  value: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, onChange, value, ...props }, ref) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      onChange(name, e.target.value)
    }

    return (
    <div className="ui-input">
      {label ? <label>{label}</label> : null}
      <input ref={ref} onChange={handleChange} value={value} {...props} />
    </div>
  )}
);

Input.displayName = "Input";
