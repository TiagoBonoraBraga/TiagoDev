export default function CustomInput(id, type, onChange, name,  value, setValue) {
    return (
        <>
            <input
                className="w-auto ss:w-60 py-2 flex justify-center items-center border-blue-200 text-blue-200  leading-tight shadow-md appearance-none border rounded focus:outline-none focus:shadow-outline"
                id={id}
                value={value}
                name={name}
                type={type}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange && onChange(e);
                  }}
               
               
            />
        </>
    )
}