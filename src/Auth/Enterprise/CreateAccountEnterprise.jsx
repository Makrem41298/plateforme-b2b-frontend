import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccountEnterprise = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 overflow-hidden">
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Créer un Compte Entreprise</h2>
                <p className="text-center text-gray-600 mb-6">Remplissez les champs pour créer votre compte</p>

                <form action="/verification-email" method="GET">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Nom de l'entreprise"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="exemple@entreprise.com"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirmation de votre mot de passe</label>
                        <input
                            type="password"
                            name="confirmation_password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Créer le compte
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Vous avez déjà un compte ? <Link to="/login/entreprise" className="text-green-600 hover:underline">Connectez-vous</Link>
                </p>
            </div>
        </div>
    );
};

export default CreateAccountEnterprise;
