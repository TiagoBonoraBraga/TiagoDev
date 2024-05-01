export default function CustomCard({children, key}) {
    return (
        <>
        <div key={key} className="flex flex-col w-2/3  ss:flex ss:flex-col ss:max-w-sm ring-2 mt-3 mb-10 ring-blue-200 dark:ring-gray-200 bg-blue-100 bg-opacity-25 rounded-lg dark:bg-gray-200   hover:shadow-lg shadow-md shadow-blue-200 hover:shadow-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1 dark:shadow-gray-100 ">
            {children}
        </div>
        </>
    )
}