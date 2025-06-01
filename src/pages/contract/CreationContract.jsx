import React, {useState, useEffect} from 'react'
import {useContract} from "../../hooks/useReduxHooks.js"
import {useLocation, useNavigate, useParams} from "react-router-dom"
import {routes} from "../../Routes/routesName.js";
import Swal from "sweetalert2";

const CreationContract = () => {
    const {offerId} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const { projectTitle, clientName  } = location?.state || {};

    const {createContract, status, error, clearContractStatus} = useContract();

    const [formData, setFormData] = useState({
        offer_id: offerId || '',
        termes: '',
        date_debut: '',
        date_fin: '',
        montant_total: '',
    });





    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createContract(formData).unwrap();
        Swal.fire({
            icon: "success",
            title: "Succès!",
            text: "Contrat créé avec succès.",

        })
        navigate(routes.entreprise.contract)
    };

    return (
        <div className="bg-gray pb-20 pt-5 pl-20 pr-20 font-sans text-gray-800 h-screen overflow-y-auto">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">

                <div className="flex items-center gap-2 mb-4 border-b pb-2">
                    <i className="fas fa-file-contract text-green-600"></i>
                    <h1 className="text-xl font-semibold text-gray-800">Nouveau Contrat</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <i className="fas fa-tags mr-2 text-blue-500"></i>
                            Offre associée
                        </label>
                        <select
                            name="offer_id"
                            value={formData.offer_id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                        >
                            <option value="" disabled>
                                -- Sélectionner une offre --
                            </option>
                            {offerId && (
                                <option value={offerId}>
                                    Offre #{offerId} — {projectTitle}
                                </option>
                            )}
                        </select>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <i className="fas fa-user mr-2 text-blue-500"></i> Client
                        </label>
                        <div className="bg-gray-100 p-2 rounded">
                            <div className="font-medium">Client de l'offre</div>
                            <div className="text-sm text-gray-500">{clientName}</div>
                        </div>
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <i className="fas fa-building mr-2 text-gray-500"></i> Entreprise
                        </label>
                        <div className="bg-gray-100 p-2 rounded">
                            <div className="font-medium">Votre entreprise</div>
                            <div className="text-sm text-gray-500">Les informations de votre entreprise seront automatiquement associées</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

                    <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <i className="fas fa-calendar-day mr-2 text-gray-500"></i> Date d'effet
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            value={formData.date_debut}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <i className="fas fa-calendar-times mr-2 text-gray-500"></i> Date d'expiration
                        </label>
                        <input
                            type="date"
                            name="date_fin"
                            value={formData.date_fin}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <i className="fas fa-align-left mr-2 text-gray-500"></i> Termes du contrat
                    </label>
                    <textarea
                        rows="4"
                        name="termes"
                        value={formData.termes}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        placeholder="Décrivez les obligations des parties, les conditions de résiliation…"
                        required
                    ></textarea>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <label className="flex items-center text-base font-semibold text-blue-700 mb-3">
                        <i className="fas fa-wallet mr-2"></i> Conditions de paiement
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Montant total</label>
                            <input
                                type="number"
                                name="montant_total"
                                value={formData.montant_total}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Échéances</label>
                            <input type="text" value="30% à la signature, 70% à la livraison"
                                   className="w-full p-2 border rounded bg-gray-100" disabled/>
                        </div>                    </div>
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600 ml-auto"
                        disabled={status === 'loading'}
                    >
                        <i className="fas fa-check-circle"></i>
                        {status === 'loading' ? 'Création en cours...' : 'Finaliser le contrat'}
                    </button>
                </div>

            </form>
        </div>)
}
export default CreationContract
