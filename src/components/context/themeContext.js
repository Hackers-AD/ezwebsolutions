import { createContext, useState, useEffect } from "react";

export const themeContext = createContext();

export default function ThemeProvider(props){
    const [theme, setTheme] = useState('dark');
    const root = document.getElementById('root');

    const toggleTheme = () => {
        setTheme(t => {
            if(t === 'dark') {
                root.style.color = '#000';
                root.style.backgroundColor = 'white';
                return 'light'
            }
            else {
                root.style.color = 'white';
                root.style.backgroundColor = '#000';
                return 'dark'
            }
        })
    }

    useEffect(() => {
        root.style.color = 'white';
        root.style.backgroundColor = '#000';
    }, []);

    return(
        <themeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </themeContext.Provider>
    )
}