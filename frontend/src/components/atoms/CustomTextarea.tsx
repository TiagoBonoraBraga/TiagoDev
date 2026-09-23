interface CustomTextareaProps {
    id: string;
    name?: string;
    value: string;
    placeholder?: string;
    rows?: number;
    setValue: (value: string) => void;
}

export default function CustomTextarea({ id, name, value, placeholder, rows = 5, setValue }: CustomTextareaProps) {
    return (
        <textarea
            className="w-full resize-y rounded-lg border border-line bg-paper-soft px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-sm transition placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            id={id}
            name={name}
            value={value}
            rows={rows}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
        />
    )
}
