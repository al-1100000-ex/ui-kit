import React from "react";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    name: string;
    onChange: (key: string, value: string) => void;
    value: string;
};
export declare const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    name: string;
    onChange: (key: string, value: string) => void;
    value: string;
} & React.RefAttributes<HTMLInputElement>>;
