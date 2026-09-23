import type { ChangeEvent } from "react";

interface CustomInputProps {
    id: string;
    type: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    value: string;
    placeholder?: string;
    setValue: (value: string) => void;
    /** Classes extras (ex.: pr-10 para abrir espaço a um ícone sobreposto) */
    className?: string;
}

export default function CustomInput({ id, type, onChange, name, value, placeholder, setValue, className = '' }: CustomInputProps) {
    return (
        <input
            className={`w-full rounded-lg border border-line bg-paper-soft px-3.5 py-2.5 text-sm text-ink shadow-sm transition placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${className}`.trim()}
            id={id}
            value={value}
            name={name}
            type={type}
            onChange={(e) => {
                setValue(e.target.value);
                onChange && onChange(e);
            }}
            placeholder={placeholder}
        />
    )
}
