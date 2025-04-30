import React, { useState, useEffect } from 'react';
import axiosInstanceClient from "../../services/axiosInstanceClient.js";

function Dashboard() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        axiosInstanceClient.get('/dashboard')
            .then((response) => {
                setMessage(response[0]);
                console.log("Bienvenue", response[0]);
            })
            .catch((error) => {
                console.error("Erreur :", error);
            })

    }, []);





    return (
        <div>
            {message || "Aucun message disponible"}
        </div>
    );
}

export default Dashboard;