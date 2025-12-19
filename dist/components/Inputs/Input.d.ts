import React from "react";
export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "onChange"> & {
    label?: string;
    name: string;
    value: string;
    onChange: (key: string, value: string) => void;
    errorText?: string;
    warningText?: string;
};
export declare const Input: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "onChange"> & {
    label?: string;
    name: string;
    value: string;
    onChange: (key: string, value: string) => void;
    errorText?: string;
    warningText?: string;
} & React.RefAttributes<HTMLInputElement>>;
