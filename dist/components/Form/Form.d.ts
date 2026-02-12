import React from "react";
type Props = {
    children: React.ReactNode;
    onSubmit: () => void;
    submitOptions?: {
        value?: string;
        disabled?: boolean;
        type?: 'primary' | 'secondary' | 'tertiary' | 'blue' | 'danger';
    };
};
export declare const Form: ({ children, onSubmit, submitOptions }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
