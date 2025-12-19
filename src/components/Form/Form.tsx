import React from "react";

type Values = Record<string, FormDataEntryValue>;

export type FormProps = Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onSubmit"
> & {
  onSubmit?: (values: Values, e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ onSubmit, ...props }, ref) => {
    return (
      <form
        ref={ref}
        onSubmit={(e) => {
          e.preventDefault();
          if (!onSubmit) return;

          const fd = new FormData(e.currentTarget);
          const values: Record<string, FormDataEntryValue> = {};

          fd.forEach((value, key) => {
            values[key] = value;
          });
          onSubmit(values, e);
        }}
        {...props}
      />
    );
  }
);

Form.displayName = "Form";
