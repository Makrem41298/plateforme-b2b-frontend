import React, { useContext, useEffect } from 'react';
import { AuthClientContext } from "./services/AuthClientContext.jsx";
import { Navigate, Outlet } from 'react-router-dom';
import VerificationEmailClient from "./Auth/Client/VerificationEmailClient.jsx";
import { routes } from "./routesName.js";
import Swal from "sweetalert2";

const RouteProtectClient = () => {
    const { tokenClient, user } = useContext(AuthClientContext);

    useEffect(() => {
        if (user === null) {
            Swal.fire({
                title: 'Loading Account',
                html: 'Please wait...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        }

        return () => {
            if (Swal.isVisible()) {
                Swal.close();
            }
        };
    }, [user]);

    if (!tokenClient) {
        return <Navigate to={routes.loginClient.path} replace />;
    }

    if (user === null) {
        return null;
    }

    if (!user?.email_verified_at) {
        return <VerificationEmailClient />;
    }

    return <Outlet />;
}

export default RouteProtectClient;