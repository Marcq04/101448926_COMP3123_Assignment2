import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, isAuthenticated: false });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth({ token, isAuthenticated: true });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setAuth({ token, isAuthenticated: true });
    };

    const logout = () => {
        localStorage.removeItem("token", token);
        setAuth({ token: null, isAuthenticated: false });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};