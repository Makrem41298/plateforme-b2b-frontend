import { createContext, useState, useEffect } from 'react';
import axiosInstanceEnterprise from "./axiosInstanceEnterprise";

export const AuthEnterpriseContext = createContext();

export const AuthEntrepriseProvider = ({ children }) => {

    const [tokenEnterprise, setTokenEnterprise] = useState(localStorage.getItem("token_enterprise"))
    const [userEnterprise, setUserEnterprise] = useState(null);

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
            setUserEnterprise(response.data);
            console.log("User data set:", response.data);
        } catch(error) {
            console.log("Fetch user error", error);
            restedValues();
        }
    }
    const registerForm = async (credentials) => {
        try {
            const {email, password} = credentials;
            await axiosInstanceEnterprise.post('/auth/entreprise/register', credentials)
            login({email, password})
            return true
        }catch(error) {
            console.log("Register error", error);
            return false;

        }


    }
    const logoutEnterprise= async ()=>{
        try {
            await axiosInstanceEnterprise.post('/auth/entreprise/logout');
            restedValues()

        }catch(error) {
            console.log("Logout error", error);
        }

    }


    const restedValues = () => {
        setTokenEnterprise(null);
        setUserEnterprise(null);
        localStorage.removeItem('token_enterprise');
    }

    return (
        <AuthEnterpriseContext.Provider value={{
            tokenEnterprise,
            userEnterprise,
            login,
             logoutEnterprise,
            registerForm
        }}>
            {children}
        </AuthEnterpriseContext.Provider>
    )
}