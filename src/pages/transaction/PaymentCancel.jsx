import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {routes} from "../../Routes/routesName.js";

const PaymentCancel = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const reference = params.get('reference');

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <div className="text-red-500 text-5xl mb-4">✗</div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Paiement annulé</h1>
                <p className="text-gray-600 mb-6">
                    Votre paiement a été annulé. Le contrat n'a pas été signé.
                </p>

                {reference && (
                    <div className="flex space-x-4">
                        <Link
                            to={`${routes.client.showContract}/${reference}`}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Retour au contrat
                        </Link>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                        >
                            Réessayer
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentCancel;