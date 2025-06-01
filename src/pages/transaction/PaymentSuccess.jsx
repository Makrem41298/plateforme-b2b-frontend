import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {routes} from "../../Routes/routesName.js";
import {clientApi} from "../../services/api.js";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const reference = params.get('reference');
    const sessionId = params.get('session_id');

    useEffect(() => {
        const confirmPayment = async () => {
            try {
              await clientApi.successCheckout(reference);
                toast.success('Paiement confirmé! Contrat signé');
                await Swal.fire({
                    icon: 'success',
                    title: 'Paiement confirmé!',
                    text: 'Votre contrat a été signé avec succès.',
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    toast: true
                })
                navigate(`${routes.client.showContract}/${reference}`, {})
            } catch (error) {
                toast.error('Erreur de confirmation du paiement');
                console.error(error);
            }
        };

        if (reference && sessionId) {
            confirmPayment();
        }
    }, [reference, sessionId, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mb-4"></div>
            <h2 className="text-2xl font-bold">Confirmation du paiement en cours...</h2>
        </div>
    );
};

export default PaymentSuccess;