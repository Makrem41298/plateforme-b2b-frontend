import React from 'react';
import { Link } from 'react-router-dom';

const SelectUser = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="text-center w-full max-w-2xl">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                        <span className="material-icons text-blue-500 mr-3">login</span>
                        Se connecter à la plateforme
                    </h1>
                    <p className="text-gray-600">Choisissez votre type de compte</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link to="/login/client"
                          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                        <div className="flex flex-col items-center">
                            <span className="material-icons text-blue-500 text-6xl mb-4">person</span>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Utilisateur Client</h3>
                            <p className="text-gray-600 mb-4">Accédez à vos projets, contrats et transactions</p>
                            <div
                                className="w-full bg-blue-500 text-white py-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                                Continuer comme client
                            </div>
                        </div>
                    </Link>

                    <Link to="/login/entreprise"
                          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                        <div className="flex flex-col items-center">
                            <span className="material-icons text-green-500 text-6xl mb-4">business</span>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Compte Entreprise</h3>
                            <p className="text-gray-600 mb-4">Gérez vos services, offres et collaborateurs</p>
                            <div
                                className="w-full bg-green-500 text-white py-3 rounded-lg group-hover:bg-green-600 transition-colors">
                                Continuer comme entreprise
                            </div>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default SelectUser;