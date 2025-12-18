import './../styles.scss';
interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (key: string, value: string) => void;
}
declare const Input: ({ name, value, onChange, label, placeholder }: Props) => import("react/jsx-runtime").JSX.Element;
export default Input;
