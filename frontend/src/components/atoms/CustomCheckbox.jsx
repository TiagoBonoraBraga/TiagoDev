export default function CustomCheckbox({ options, value, setValue }) {

    function handleChange({ target }) {
        if (target.checked) {
            setValue([...value, target.value]);
        } else {
            setValue(value.filter((itemValue) => itemValue !== target.value))
        }
    }

    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    {option}
                    <input 
                        className="flex justify-center items-center ml-4" 
                        type="checkbox" 
                        value={option} 
                        checked={value.includes(option)} 
                        onChange={handleChange} />
                </label>
            ))}
        </>)
}   