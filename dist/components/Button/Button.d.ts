import { ReactNode } from "react";
type Props = {
    label: string | ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'primary' | 'secondary' | 'tertiary' | 'blue' | 'danger';
};
export declare const Button: ({ label, onClick, disabled, type }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
