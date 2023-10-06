export default function CustomInput(id, type, onChange, value, ...props) {
    return (
        <>
            <input
                className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                value={value}
                type={type}
                onChange={onChange}
                {...props}
            />
        </>
    )
}