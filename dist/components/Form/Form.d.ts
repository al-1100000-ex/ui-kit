import React from "react";
type Values = Record<string, FormDataEntryValue>;
export type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    onSubmit?: (values: Values, e: React.FormEvent<HTMLFormElement>) => void;
};
export declare const Form: React.ForwardRefExoticComponent<Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    onSubmit?: (values: Values, e: React.FormEvent<HTMLFormElement>) => void;
} & React.RefAttributes<HTMLFormElement>>;
export {};
