import React from "react";
import { Input } from "../Inputs/Input";

type Props = {
  children: React.ReactNode;
  onSubmit: () => void;
  submitOptions?: {
    value?: string;
    disabled?: boolean;
    type?: 'primary' | 'secondary' | 'tertiary' | 'blue' | 'danger';
  };
}

export const Form = ({ children, onSubmit, submitOptions }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }

  let classNames = ['ui-button'];
  if (!submitOptions?.disabled && submitOptions?.type) classNames.push(`ui-button--${submitOptions?.type}`);
  if (submitOptions?.disabled) classNames.push('ui-button--disabled');

  const className = classNames.join(' ');

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <Input name={'form__submit'} className={className} value={submitOptions?.value ?? 'Save'} type={'submit'} />
    </form>
  )
}