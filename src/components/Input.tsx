import { ChangeEvent } from "react";
import './../styles.scss';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (key: string, value: string) => void;
}

export const Input = ({name, value, onChange, label, placeholder}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  }

  return (
    <div className="input">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        type="text"
        placeholder={placeholder ?? label ?? ''}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}