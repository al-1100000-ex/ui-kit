import React from "react";
import { Input } from "../Inputs/Input";

type Props = {
  children: React.ReactNode;
  onSubmit: () => void;
  submitValue?: string;
}

export const Form = ({ children, onSubmit, submitValue }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <Input name={'form__submit'} value={submitValue ?? 'Save'} type={'submit'} />
    </form>
  )
}