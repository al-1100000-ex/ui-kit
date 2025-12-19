import React from "react";
type NativeProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "onChange">;
export type InputProps = NativeProps & {
    label?: string;
    name: string;
    value: string;
    onChange: (key: string, value: string) => void;
};
export declare const Input: React.ForwardRefExoticComponent<NativeProps & {
    label?: string;
    name: string;
    value: string;
    onChange: (key: string, value: string) => void;
} & React.RefAttributes<HTMLInputElement>>;
export {};
