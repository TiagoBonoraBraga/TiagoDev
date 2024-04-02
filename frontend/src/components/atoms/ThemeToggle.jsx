import { useTheme } from "@/hooks/useTheme";

import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle() {
    const { darkMode, setDarkMode } = useTheme()   
    

    return (
        <>
            <div
                className="relative w-16 h- 8 flex items-center dark:bg-gray-400 bg-gray-200 cursor-pointer rounded-full p-1"
                onClick={() => setDarkMode(!darkMode)}>
                <IoMoonOutline size={18} className="text-black-500 cursor-pointer" />
                <div className="absolute bg-blue-200 dark:bg-yellow-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                    style={darkMode ? { left: "2px" } : { right: "2px" }}
                ></div>
                <CiSun size={25} className="ml-auto text-yellow-500 cursor-pointer" />
            </div>
        </>
    )
}