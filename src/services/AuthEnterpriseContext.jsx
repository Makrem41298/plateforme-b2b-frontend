import { createContext, useState, useEffect } from 'react';
import axiosInstanceEnterprise from "./axiosInstanceEnterprise";

export const AuthEnterpriseContext = createContext();

export const AuthEntrepriseProvider = ({ children }) => {

    const [tokenEnterprise, setTokenEnterprise] = useState(localStorage.getItem("token_enterprise"))
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (tokenEnterprise) {
            meEntreprise();
        }
    }, [tokenEnterprise]);

    const login = async (credentials) => {
        try {
            const response = await axiosInstanceEnterprise.post('/auth/entreprise/login', credentials);
            const { access_token } = response;

            localStorage.setItem('token_enterprise', access_token);
            setTokenEnterprise(access_token);
            return true


        } catch(error) {
            console.log("Login error", error);
            return false;
        }
    }

    const meEntreprise = async () => {
        try {
            const response = await axiosInstanceEnterprise.get('/auth/entreprise/me');
            setUser(response.data);
            console.log("User data set:", response.data);
        } catch(error) {
            console.log("Fetch user error", error);
            logout();
        }
    }

    const logout = () => {
        setTokenEnterprise(null);
        setUser(null);
        localStorage.removeItem('token_enterprise');
    }

    return (
        <AuthEnterpriseContext.Provider value={{
            tokenEnterprise,
            user,
            login,
            logout
        }}>
            {children}
        </AuthEnterpriseContext.Provider>
    )
}