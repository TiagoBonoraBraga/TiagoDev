import {
    useContext,
    createContext,
    useState,
    useEffect,
    type ReactNode,
    type Dispatch,
    type SetStateAction,
} from 'react';

interface ThemeContextValue {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default function ThemeContextProvider({ children }: { children: ReactNode }) {

    const [darkMode, setDarkMode] = useState(false);

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

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme deve ser usado dentro de um ThemeContextProvider');
    }
    return context;
}
