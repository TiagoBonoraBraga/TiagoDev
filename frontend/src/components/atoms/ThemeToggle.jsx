import { useState, useEffect } from 'react';
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

export default function ThemeDefault() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme === "dark") setDarkMode(true);
    },[]);

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    },[darkMode]);

    return (
        <>
            <div
                className="relative w-16 h-8 flex items-center dark:bg-black-500 bg-blue-100 cursor-pointer rounded-full p-1"
                onClick={() => setDarkMode(!darkMode)}>
                <IoMoonOutline size={18} className="text-white-500 cursor-pointer" />
                <div className="absolute bg-white-500 dark:bg-yellow-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                    style={darkMode ? { left: "2px" } : { right: "2px" }}
                ></div>
                <CiSun size={25} className="ml-auto text-yellow-500 cursor-pointer" />
            </div>
        </>
    )
}