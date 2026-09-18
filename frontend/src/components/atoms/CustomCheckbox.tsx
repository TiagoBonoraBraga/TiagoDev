import type { ChangeEvent } from "react";

interface CustomCheckboxProps {
    options: string[];
    value: string[];
    setValue: (value: string[]) => void;
}

export default function CustomCheckbox({ options, value, setValue }: CustomCheckboxProps) {

    function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
        if (target.checked) {
            setValue([...value, target.value]);
        } else {
            setValue(value.filter((itemValue) => itemValue !== target.value))
        }
    }

    return (
        <>
            {options.map((option) => (
                <label key={option} className="text-blue-400 ss:text-xs">
                    {option}
                    <input
                        className="flex justify-center items-center ml-4 border-blue-200"
                        type="checkbox"
                        value={option}
                        checked={value.includes(option)}
                        onChange={handleChange} />
                </label>
            ))}
        </>)
}
