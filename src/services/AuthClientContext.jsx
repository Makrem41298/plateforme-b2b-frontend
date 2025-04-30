import { createContext, useState, useEffect } from 'react';
import axiosInstanceClient from "./axiosInstanceClient";
import Swal from "sweetalert2";

export const AuthClientContext = createContext();
export const AuthClientProvider = ({ children }) => {
    const [tokenClient, setTokenClient] = useState(localStorage.getItem("token_client"))
    const [user, setUser] = useState(null);



    useEffect(() => {
        if (tokenClient) {
            console.log("welecom to",user);
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
            setUser(response.data);
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
    const logout = async () => {
        try {
            await axiosInstanceClient.post('/auth/client/logout');
            restedValues()
        }catch(error) {
            console.log("Logout error", error);
        }
    }

    const restedValues = () => {
        setTokenClient(null);
        setUser(null);
        localStorage.removeItem('token_client');

    }

    return (
        <AuthClientContext.Provider value={{
           tokenClient,
            user,
            login,
            logout ,
            registerForm,
            restedValues
        }}>
            {children}
        </AuthClientContext.Provider>
    )
}