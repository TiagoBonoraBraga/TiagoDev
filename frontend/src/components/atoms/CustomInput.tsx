import type { ChangeEvent } from "react";

interface CustomInputProps {
    id: string;
    type: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    value: string;
    placeholder?: string;
    setValue: (value: string) => void;
}

export default function CustomInput({ id, type, onChange, name, value, placeholder, setValue }: CustomInputProps) {
    return (
        <>
            <input
                className="flex justify-center items-center w-auto py-2 ss:w-64 border-blue-200 text-blue-200  leading-tight shadow-md appearance-none border rounded focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:p-4"
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
        </>
    )
}
