export default function CustomButton({title}){
    return (
        <button className="w-80 bg-blue-300 text-white-500 mt-5  p-2 rounded hover:bg-white-500 hover:border-2 border-blue-300 hover:text-blue-200 " type="submit">
            {title}
           
        </button>
    )
}