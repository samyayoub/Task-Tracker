import React from 'react';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('lightTheme');

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('lightTheme');

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: 
                    () => setTheme(
                        theme === 'lightTheme' 
                        ? 'darkTheme' 
                        : 'lightTheme'),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);