import { ReactNode } from "react";
type Props = {
    label: string | ReactNode;
    onClick?: () => void;
    customizable?: boolean;
};
export declare const Button: ({ label, onClick, customizable }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
