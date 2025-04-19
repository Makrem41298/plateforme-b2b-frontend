import React from 'react';


const SettingsPage = () => {

    return (
        <div>
            <div className="p-4 md:p-10 h-screen overflow-y-auto" >
                <div className="max-w-3xl mx-auto ">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-8">Paramètres du compte</h1>


                    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sécurité</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe
                                    actuel</label>
                                <input type="password"
                                       className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                       placeholder="••••••••"/>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de
                                        passe</label>
                                    <input type="password"
                                           className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                           placeholder="••••••••"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer mot de
                                        passe</label>
                                    <input type="password"
                                           className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                           placeholder="••••••••"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Notifications</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Notifications email</p>
                                    <p className="text-sm text-gray-500">Recevoir des notifications importantes par
                                        email</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" checked/>
                                    <div
                                        className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors">
                                        <div
                                            className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                                    </div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Notifications push</p>
                                    <p className="text-sm text-gray-500">Recevoir des notifications sur l'appareil</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer"/>
                                    <div
                                        className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors">
                                        <div
                                            className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
                        <h2 className="text-lg font-semibold text-red-700 mb-4">Zone de danger</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-red-700">Supprimer le compte</p>
                                    <p className="text-sm text-red-500">Cette action est irréversible</p>
                                </div>
                                <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
                                    Supprimer le compte
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                            Sauvegarder les modifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;