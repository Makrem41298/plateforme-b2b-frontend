import React, { useEffect, useState } from 'react';
import { FileText, Calendar, DollarSign, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import {useContract} from "../../hooks/useReduxHooks.js";
import {useLocation} from "react-router-dom";
import axiosInstanceClient from "../../services/axiosInstanceClient.js";
import {clientApi} from "../../services/api.js";

const ShowContract = () => {
    const {contracts, status, getContractByReference,getContractClientByReference} = useContract();
    const location = useLocation();
    const isClient = location.pathname.includes("client");
    // Mock reference for demo - replace with your router params
    const reference = "CONT-2025-0001";
    const [contract, setContract] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContract = async (isClient) => {
            try {
                setLoading(true);
                if (isClient) {
                    await getContractClientByReference(reference).unwrap();

                }else {
                    await getContractByReference(reference).unwrap();

                }
            } catch (error) {
                console.error('Error loading contract:', error);
                setLoading(false);
            }
        };

        loadContract(isClient);
        console.log(isClient);

    }, [ reference]);

    useEffect(() => {
        if (status === 'succeeded') {
            setContract(contracts[0] || null);
            setLoading(false);
        }
        if (status === 'failed' || status === 'error') {
            setContract(null);
            setLoading(false);
        }
        if (status === 'loading') {
            setLoading(true);
            setContract(null);
        }
    }, [status, contracts]);

    const getStatusConfig = (status) => {
        switch (status) {
            case 'en_attente':
                return {
                    label: 'En Attente',
                    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
                    icon: <AlertCircle className="w-4 h-4" />
                };
            case 'signe':
                return {
                    label: 'Signé',
                    color: 'bg-green-100 text-green-800 border-green-200',
                    icon: <CheckCircle className="w-4 h-4" />
                };
            case 'rejete':
                return {
                    label: 'Rejeté',
                    color: 'bg-red-100 text-red-800 border-red-200',
                    icon: <XCircle className="w-4 h-4" />
                };
            default:
                return {
                    label: status,
                    color: 'bg-gray-100 text-gray-800 border-gray-200',
                    icon: <Clock className="w-4 h-4" />
                };
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatCurrency = (amount) => {
        if (!amount) return '0,00 €';
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        }).format(parseFloat(amount));
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Chargement du contrat...</p>
                </div>
            </div>
        );
    }

    if (!contract) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Contrat non trouvé</h2>
                    <p className="text-gray-600">Le contrat avec la référence "{reference}" n'existe pas.</p>
                </div>
            </div>
        );
    }

    const statusConfig = getStatusConfig(contract.statut);
    const handleSigneContract = (reference) => {
        clientApi.checkout(reference)
            .then((response) => {
                window.location.href = response.data;
            })
            .catch((error) => {
                console.error("Erreur lors de la requête :", error);
            });
    };
    const handlePayerTranche2= (reference) => {
        clientApi.checkout(reference)
            .then((response) => {
                window.location.href = response.data;
            })
            .catch((error) => {
                console.error("Erreur lors de la requête :", error);
            });
    }



    return (
        <div className="bg-gray-50 py-20  px-4 sm:px-6 lg:px-8 h-screen overflow-y-auto">
            <div className="max-w-4xl mx-auto ">
                {/* Header */}
                <div className="bg-white shadow-sm rounded-lg mb-6 ">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Contrat</h1>
                                    <p className="text-sm text-gray-500">Référence: {contract.reference}</p>
                                </div>
                            </div>
                            <div className={`flex items-center px-3 py-1 rounded-full border ${statusConfig.color}`}>
                                {statusConfig.icon}
                                <span className="ml-2 text-sm font-medium">{statusConfig.label}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contract Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Basic Information */}
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Informations générales</h3>
                            </div>
                            <div className="px-6 py-4 space-y-4">
                                <div className="flex items-center">
                                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700"> Nom d'enterprise</p>
                                        <p className="text-sm text-gray-900">{contract.offre.entreprise.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Nom de client</p>
                                        <p className="text-sm text-gray-900">{contract.offre.projet.client.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Nom de projet</p>
                                        <p className="text-sm text-gray-900">{contract.offre.projet.titre}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Dates importantes</h3>
                            </div>
                            <div className="px-6 py-4 space-y-4">
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 text-green-500 mr-3" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Date de début</p>
                                        <p className="text-sm text-gray-900">{formatDate(contract.date_debut)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 text-red-500 mr-3" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Date de fin</p>
                                        <p className="text-sm text-gray-900">{formatDate(contract.date_fin)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Créé le</p>
                                        <p className="text-sm text-gray-900">{formatDate(contract.created_at)}</p>
                                    </div>
                                </div>
                                {contract.signe_le && (
                                    <div className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">Signé le</p>
                                            <p className="text-sm text-gray-900">{formatDate(contract.signe_le)}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Financial Information */}
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Informations financières</h3>
                            </div>
                            <div className="px-6 py-4 space-y-4">
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                    <div className="flex items-center">
                                        <DollarSign className="w-5 h-5 text-blue-500 mr-3" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">Première tranche</p>
                                            <p className="text-lg font-bold text-blue-600">
                                                {formatCurrency(contract.premiere_tranche)}
                                                {contract.transactions_count === 1 && (
                                                    <span className="ml-2 text-green-600">✔️</span>
                                                    )}
                                            </p>


                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                    <div className="flex items-center">
                                        <DollarSign className="w-5 h-5 text-green-500 mr-3" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">Montant total</p>
                                            <p className="text-xl font-bold text-green-600">{formatCurrency(contract.montant_total)}
                                                {contract.transactions_count === 2 && (
                                                    <span className="ml-2 text-green-600">✔️</span>
                                                )}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Reste à payer:</span>
                                        <span className="font-medium text-gray-900">
                                          {contract.transactions_count === 0 &&
                                              formatCurrency(parseFloat(contract.montant_total || 0))
                                          }

                                        {contract.transactions_count === 1 &&
                                            formatCurrency(
                                                parseFloat(contract.montant_total || 0) - parseFloat(contract.premiere_tranche || 0)
                                            )
                                        }

                                        {contract.transactions_count === 2 &&
                                            formatCurrency(0)
                                        }
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Termes et conditions</h3>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-sm text-gray-700 leading-relaxed">{contract.termes || 'Aucun terme spécifié'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}

                {contract.statut  === 'en_attente'&&(
                    <div className="mt-8 bg-white shadow-sm rounded-lg">
                        <div className="px-6 py-4">
                            <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                {
                                    !isClient && (
                                        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Modifier
                                        </button>)
                                }

                                <button className="px-4 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Rejeter
                                </button>
                                {
                                    isClient && (
                                        <button
                                            onClick={() => handleSigneContract(contract.reference)}

                                            className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Signer le contrat
                                        </button>
                                    )

                                }
                            </div>
                        </div>
                    </div>
                )
                }
                {contract.statut === 'en_attente' && (
                    <div className="mt-8 bg-white shadow-sm rounded-lg">
                        <div className="px-6 py-4">
                            <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                {!isClient && (
                                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Modifier
                                    </button>
                                )}
                                <button className="px-4 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Rejeter
                                </button>
                                {isClient && (
                                    <button
                                        onClick={() => handleSigneContract(contract.reference)}
                                        className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Signer le contrat
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {contract.statut === 'signe' && (
                    <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 space-y-4 sm:space-y-0 sm:flex sm:justify-end sm:gap-4">
                            {/* Litige Button */}
                            <button
                                type="button"
                                aria-label="Signaler un litige"
                                className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 shadow-sm"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Signaler un litige
                                </div>
                            </button>

                            {/* Payer Tranch 2 Button - Conditionally Rendered */}
                            {contract.offre.projet.status === "Termine" && isClient &&!(contract.transactions_count === 2)&& (
                                <button
                                    onClick={() => handlePayerTranche2(contract.reference)}
                                    type="button"
                                    aria-label="Payer la tranche 2"
                                    className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-white bg-green-600 border border-green-600 rounded-lg hover:bg-green-700 hover:border-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 shadow-sm"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Payer la tranche 2
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                )}







            </div>
        </div>
    );
};

export default ShowContract;