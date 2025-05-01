import React, { useContext, useEffect } from 'react';
import { AuthClientContext } from "../services/AuthClientContext.jsx";
import { Navigate, Outlet } from 'react-router-dom';
import VerificationEmailClient from "../Auth/Client/VerificationEmailClient.jsx";
import { routes } from "./routesName.js";
import Swal from "sweetalert2";
import {AuthEnterpriseContext} from "../services/AuthEnterpriseContext.jsx";
import VerificationEmailEnterprise from "../Auth/Enterprise/VerificationEmailEnterprise.jsx";

const RouteProtectClient = () => {
    const { tokenEnterprise, userEnterprise } = useContext(AuthEnterpriseContext);

    useEffect(() => {
        if (userEnterprise === null) {
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
    }, [userEnterprise]);

    if (!tokenEnterprise) {
        return <Navigate to={routes.loginEnterprise.path} replace />;
    }

    if (userEnterprise === null) {
        return null;
    }

    if (!userEnterprise?.email_verified_at) {
        return <VerificationEmailEnterprise />;
    }

    return <Outlet />;
}

export default RouteProtectClient;