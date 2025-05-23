import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useOffer } from "../../hooks/useReduxHooks.js";
import Filter from "../../components/Filter";
import {routes} from "../../Routes/routesName.js"; // Assurez-vous du bon chemin

const ListOfferClient = () => {
    const { slug } = useParams();
    const [filters, setFilters] = useState({
        montant_min: '',
        montant_max: '',
        statut: '',
        date_debut: '',
        date_fin: '',
        sort_by: '',
        sort_order: '',
        per_page: '10',
        page: 1, // Ajout de la pagination
    });
    const { getOfferProject, offers, status, error } = useOffer();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleFilterChange = (filterId, value) => {
        setFilters(prev => {
            const newFilters = { ...prev, [filterId]: value };
            if (filterId !== 'page') {
                newFilters.page = 1;
            }
            return newFilters;
        });
    };

    const handleReset = () => {
        setFilters({
            montant_min: '',
            montant_max: '',
            statut: '',
            date_debut: '',
            date_fin: '',
            sort_by: '',
            sort_order: '',
            per_page: '10',
            page: 1,
        });
        setSearchQuery('');
    };


    useEffect(() => {
        getOfferProject(slug, filters);

    }, []);

    const handleMessage = async (EnterpriseId,typeAuth) => {
        console.log(EnterpriseId, typeAuth);
        navigate(`${routes.client.conversation}/${EnterpriseId}`, {
            state: { typeAuth }
        });

    };

    const handleNextPage = () => {
        setFilters(prev => ({ ...prev, page: prev.page + 1 }));
    };

    const handlePrevPage = () => {
        setFilters(prev => ({ ...prev, page: prev.page - 1 }));
    };

    const offerColumns = [
        'Entreprise',
        'Montant proposé',
        'Délai',
        'Statut',
        'Date de création',
        'Actions'
    ];

    const offerFilterGroups = [
        {
            title: 'Filtres principaux',
            filters: [
                { id: 'statut', type: 'select', label: 'Statut', options: ['accepte', 'en_attente', 'refuse'] },
                { id: 'montant_min', type: 'number', label: 'Montant min' },
                { id: 'montant_max', type: 'number', label: 'Montant max' },
            ]
        }
    ];

    const offerFilterConfig = {
        sortOptions: [
            { value: 'created_at', label: 'Date de création' },
            { value: 'montant_propose', label: 'Montant' }
        ],
        perPageOptions: ['10', '25', '50']
    };

    return (
        <div className="bg-gray-50 h-screen overflow-y-auto p-10 pb-40 font-sans text-gray-800">
            <div className="max-w-7xl mx-auto">
                <Filter
                    filterGroups={offerFilterGroups}
                    filterConfig={offerFilterConfig}
                    filters={filters}
                    errors={error}
                    onFilterChange={handleFilterChange}
                    onReset={handleReset}
                    onSearch={setSearchQuery}
                    searchQuery={searchQuery}
                />

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className={`p-4 md:p-2 ${status === "loading" ? "opacity-30 pointer-events-none" : "opacity-100"}`}>
                        <div className="bg-white shadow-sm rounded-xl overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100 text-gray-600 text-sm font-semibold">
                                <tr>
                                    {offerColumns.map((column) => (
                                        <th
                                            key={column}
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                                {offers?.data?.map((offer) => (
                                    <tr key={offer.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{offer.entreprise?.name || 'N/A'}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{offer.montant_propose} €</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{offer.delai} jours</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-sm ${
                                                offer.statut === 'accepte' ? 'bg-green-100 text-green-800' :
                                                    offer.statut === 'en_attente' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                            }`}>
                                                {offer.statut}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(offer.created_at).toLocaleDateString("fr-FR")}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                type="button"
                                                className="text-blue-500 hover:text-blue-700 transition-colors"
                                                aria-label="Reply"
                                                onClick={()=>handleMessage(offer.entreprise?.id,"entreprise")

                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 -960 960 960"
                                                    width="24"
                                                    height="24"
                                                    className="fill-current"
                                                >
                                                    <path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z"/>
                                                </svg>

                                            </button>

                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                            Affichage {offers.from ?? 0}–{offers.to ?? 0} sur {offers.total ?? 0}
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={handlePrevPage}
                                disabled={offers.current_page === 1}
                                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                            >
                                ←
                            </button>
                            <span className="px-3 py-1.5 text-gray-600">
                                Page {offers.current_page}
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={offers.current_page === offers.last_page}
                                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListOfferClient;