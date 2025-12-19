import React from "react";

type NativeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name" | "value" | "onChange"
>;

export type InputProps = NativeProps & {
  label?: string;
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, onChange, value, ...props }, ref) => {
    return (
      <div className="ui-input">
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
