interface CustomLabelProps {
  title: string;
}

export default function CustomLabel({ title }: CustomLabelProps) {
  return (
    <label className="font-mono text-xs uppercase tracking-wider text-muted">
      {title}
    </label>
  );
}
