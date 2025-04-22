import { createContext, useState, useEffect } from 'react';
import axiosInstanceEnterprise from "./axiosInstanceEnterprise";

export const AuthEnterpriseContext = createContext();

export const AuthEntrepriseProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token_enterprise"))
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) meEntreprise();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await axiosInstanceEnterprise.post('/auth/entreprise/login', credentials);
            const { access_token } = response;

            localStorage.setItem('token_enterprise', access_token)
            setToken(access_token);
            await meEntreprise();

            return true;
        } catch(error) {
            console.log("Login error", error);
            return false;
        }
    }

    const meEntreprise = async () => {
        try {
            const response = await axiosInstanceEnterprise.get('/auth/entreprise/me');
            console.log(response.data);
        } catch(error) {
            localStorage.removeItem('token_enterprise');
            console.log("Fetch user error", error);
        }
    }

    return (
        <AuthEnterpriseContext.Provider value={{ token, user, login}}>
            {children}
        </AuthEnterpriseContext.Provider>
    )
}