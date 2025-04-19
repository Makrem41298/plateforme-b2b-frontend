import React from 'react'

export const Withdraw = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">

            <div className="w-full max-w-md space-y-6">

                <h1 className="text-2xl font-semibold text-gray-800">Retirer mon solde</h1>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h2 className="text-gray-700 text-sm mb-2">Solde courant</h2>
                    <p className="text-2xl font-bold text-green-600">$12,450.00</p>
                    <p className="text-sm text-gray-400 mt-1">disponibles pour le retrait</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Retirer montant</label>
                        <input type="number" placeholder="Entrer le montant à retirer"
                               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mode de paiement</label>
                        <input type="text" value="virement bancaire" disabled
                               className="w-full px-3 py-2 bg-gray-100 border rounded-md text-gray-600 cursor-not-allowed"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes (facultatif)</label>
                        <textarea rows="3" placeholder="Ajouter des détails ou des instructions ici…"
                                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>


                    <div className="flex gap-3 justify-end pt-2">
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Confirmer
                            le retrait
                        </button>
                        <button
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">annuler
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
