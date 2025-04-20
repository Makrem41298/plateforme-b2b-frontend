import { createContext, useState, useEffect } from 'react';
import axiosInstanceClient from "./axiosInstanceClient.js";

export const AuthContext = createContext();

export const AuthClientProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token_client"))
    const [user, setUser] = useState(null);

    // Ajout d'un effet pour charger les infos utilisateur au montage
    useEffect(() => {
        if (token) meClient();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await axiosInstanceClient.post('/auth/client/login', credentials);
            const { access_token } = response

            localStorage.setItem('token_client', access_token)
            setToken(access_token);
            await meClient();

            return true;
        } catch(error) {
            console.log("Login error", error);
            return false;
        }
    }

    const meClient = async () => {
        try {
            const response = await axiosInstanceClient.get('/auth/client/me');
            console.log(response);
            setUser(response.data);
        } catch(error) {
            console.log("Fetch user error", error);
        }
    }



    return (
        <AuthContext.Provider value={{ token, user, login}}>
            {children}
        </AuthContext.Provider>
    )
}