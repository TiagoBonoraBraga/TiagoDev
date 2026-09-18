interface CustomLabelProps {
  title: string;
}

export default function CustomLabel({ title }: CustomLabelProps) {
  return (
    <>
      <label className="text-blue-400 tracking-wider  ">{title}</label>
    </>
  );
}
