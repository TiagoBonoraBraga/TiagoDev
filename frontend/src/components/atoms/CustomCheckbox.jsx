export default function CustomCheckbox({id, name, value, type, onChange, ...props}) {
    return (
        <>
            <input
                 className="flex justify-center items-center ml-4"
                id={id}
                name={name}
                value={value}
                type={type}
                onChange={onChange}
                props={props}
                
            />
        </>)
}