import { createContext, useState, useEffect } from 'react';
import axiosInstanceClient from "./axiosInstanceClient";

export const AuthClientContext = createContext();
export const AuthClientProvider = ({ children }) => {
    const [tokenClient, setTokenClient] = useState(localStorage.getItem("token_client"))
    const [userClient, setUserClient] = useState(null);



    useEffect(() => {
        if (tokenClient) {
            console.log("welecom to",userClient);
            meClient();
        }
    }, [tokenClient]); // Add tokenClient as dependency to auto-fetch user on token change

    const login = async (credentials) => {
        try {
            const response = await axiosInstanceClient.post('/auth/client/login', credentials);
            const { access_token } = response;

            localStorage.setItem('token_client', access_token)
            setTokenClient(access_token);
            return true

        } catch(error) {

            console.log("Login error", error);
            return false;
        }
    }

    const meClient = async () => {
        try {
            const response = await axiosInstanceClient.get('/auth/client/me');
            setUserClient(response.data);
            console.log("Client user data:", response.data);
        } catch(error) {
            console.log("Fetch user error", error);
            restedValues();
        }
    }
    const registerForm = async (credentials) => {
        try {
           const {email, password} = credentials;
            await axiosInstanceClient.post('/auth/client/register', credentials)
            login({email, password})
            return true
        }catch(error) {
            console.log("Register error", error);
            return false;

        }


    }
    const logoutClient = async () => {
        try {
            await axiosInstanceClient.post('/auth/client/logout');
            restedValues()
        }catch(error) {
            console.log("Logout error", error);
        }
    }

    const restedValues = () => {
        setTokenClient(null);
        setUserClient(null);
        localStorage.removeItem('token_client');

    }

    return (
        <AuthClientContext.Provider value={{
           tokenClient,
            userClient,
            login,
            logoutClient ,
            registerForm,
            restedValues
        }}>
            {children}
        </AuthClientContext.Provider>
    )
}