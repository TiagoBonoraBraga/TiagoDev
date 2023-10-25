export default function CustomCheckbox({ id, name, value, setValue, type, onChange }) {
    return (
        <>
            <input
                className="flex justify-center items-center ml-4"
                id={id}
                name={name}
                value={value}
                type={type}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange && onChange(e);
                }}
              

            />
        </>)
}