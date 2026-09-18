interface CustomTitleProps {
    title: string;
}

export default function CustomTitle({ title }: CustomTitleProps) {
    return <h1 className="text-start text-lg font-bold text-blue-300 dark:text-blue-500 tracking-wider mb-5">{title}</h1>
}
