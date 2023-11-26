import React, { createContext, useState } from 'react';

export const contextTheme = createContext();

export default function Themecontext({ children }) {
    const [Theme, setTheme] = useState("light");
    const Togglebtn = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    };

    return (
        <contextTheme.Provider value={{ Theme, Togglebtn }}>
            {children}
        </contextTheme.Provider>
    );
}
