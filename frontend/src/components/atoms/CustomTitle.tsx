interface CustomTitleProps {
    title: string;
}

export default function CustomTitle({ title }: CustomTitleProps) {
    return <h1 className="mb-4 text-start font-display text-lg font-bold tracking-tight text-ink">{title}</h1>
}
