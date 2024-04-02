import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true)
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}