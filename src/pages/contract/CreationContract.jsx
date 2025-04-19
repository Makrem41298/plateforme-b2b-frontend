import React from 'react'

const CreationContract = () => {
    return (
        <div className="bg-gray pb-20 pt-5 pl-20 pr-20 font-sans text-gray-800 h-screen overflow-y-auto">

        <div className="bg-white p-6 rounded-lg shadow">

            <div className="flex items-center gap-2 mb-4 border-b pb-2">
                <i className="fas fa-file-contract text-green-600"></i>
                <h1 className="text-xl font-semibold text-gray-800">Nouveau Contrat</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-tags mr-2 text-blue-500"></i> Offre associée
                    </label>
                    <select className="w-full p-2 border rounded bg-gray-100" disabled>
                        <option>Sélectionner une offre</option>
                    </select>
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-hashtag mr-2 text-purple-500"></i> Référence
                    </label>
                    <input type="text" value="CT-2024-001" className="w-full p-2 border rounded"/>
                </div>
            </div>

*            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-user mr-2 text-blue-500"></i> Client
                    </label>
                    <div className="bg-gray-100 p-2 rounded">
                        <div className="font-medium">Sophie Martin</div>
                        <div className="text-sm text-gray-500">sophie@client.com</div>
                    </div>
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-building mr-2 text-gray-500"></i> Entreprise
                    </label>
                    <div className="bg-gray-100 p-2 rounded">
                        <div className="font-medium">TechSolutions</div>
                        <div className="text-sm text-gray-500">contact@techsolutions.com</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-calendar-alt mr-2 text-gray-500"></i> Date de signature
                    </label>
                    <input type="date" className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-calendar-day mr-2 text-gray-500"></i> Date d'effet
                    </label>
                    <input type="date" className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-calendar-times mr-2 text-gray-500"></i> Date d'expiration
                    </label>
                    <input type="date" className="w-full p-2 border rounded"/>
                </div>
            </div>

            <div className="mb-6">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <i className="fas fa-align-left mr-2 text-gray-500"></i> Termes du contrat
                </label>
                <textarea rows="4" className="w-full border rounded p-2"
                          placeholder="Décrivez les obligations des parties, les conditions de résiliation…"></textarea>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <label className="flex items-center text-base font-semibold text-blue-700 mb-3">
                    <i className="fas fa-wallet mr-2"></i> Conditions de paiement
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Montant total</label>
                        <input type="number" value="6500" className="w-full p-2 border rounded"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Échéances</label>
                        <input type="text" value="30% à la signature, 70% à la livraison"
                               className="w-full p-2 border rounded bg-gray-100" disabled/>
                    </div>
                </div>
            </div>

            <div className="text-right">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600">
                    <i className="fas fa-check-circle"></i> Finaliser le contrat
                </button>
            </div>

        </div>

        </div>)
}
export default CreationContract
