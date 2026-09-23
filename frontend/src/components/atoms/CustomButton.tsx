interface CustomButtonProps {
    title: string;
}

export default function CustomButton({ title }: CustomButtonProps) {
    return (
        <button
            className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            type="submit"
        >
            {title}
        </button>
    )
}
