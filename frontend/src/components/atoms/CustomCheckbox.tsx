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
            {options.map((option) => {
                const checked = value.includes(option)
                return (
                    <label
                        key={option}
                        className={`inline-flex cursor-pointer items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                            checked
                                ? 'border-accent bg-accent/10 text-accent'
                                : 'border-line text-muted hover:border-accent/40 hover:text-ink'
                        }`}
                    >
                        <input
                            className="sr-only"
                            type="checkbox"
                            value={option}
                            checked={checked}
                            onChange={handleChange}
                        />
                        {option}
                    </label>
                )
            })}
        </>
    )
}
