export default function CustomButton({title}){
    return (
        <button className="w-32 ss:w-60 ss:mb-5 bg-blue-300 text-white-500 p-1.5 rounded hover:bg-blue-200 hover:text-white-500 border-blue-300 " type="submit">
            {title}           
        </button>
    )
}