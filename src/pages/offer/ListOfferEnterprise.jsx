import { useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {useOffer} from "../../hooks/useReduxHooks.js";
import Filter from "../../components/Filter";
import {routes} from "../../Routes/routesName.js";
import {filterOfferConfig, filterOfferGroups} from "../../data.js";
import {entrepriseApi} from "../../services/api.js";

const ListOfferEnterprise = () => {
    const [filters, setFilters] = useState({
        montant_min: '0',
        montant_max: '',
        statut: '',
        date_start: new Date().toISOString().split('T')[0],
        sort_field: '',
        sort_order: '',
        date_end: '',
        per_page: '10',
    });
    const handleFilterChange = (filterId, value) => {

        setFilters(prev => ({ ...prev, [filterId]: value }));

    };
    const { getAllOffers, deleteOffer, offers, status, error,updateOffer } = useOffer();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const statusLabels = {
        en_attente: "En attente",
        acceptee: "Accepté",
        rejetee: "Refusé",
    };


    const handleReset = () => {
        setFilters({
            montant_min: '',
            montant_max: '',
            statut: '',
            date_start: new Date().toISOString().split('T')[0],
            sort_field: '',
            sort_order: '',
            date_end: '',
            per_page: '10',
        });
        setSearchQuery('');
    };
    useEffect(()=>{
        setFilters(prev => ({ ...prev, projet_titre: searchQuery }));
    },[searchQuery]);

    useEffect(() => {
        for (const key in filters) {
            if (filters[key] === "") {
                delete filters[key];
            }
        }
        getAllOffers(filters);
    }, [filters]);

    useEffect(() => {
        getAllOffers().unwrap();

    }, []);






    const handleNextPage = () => {
        setFilters(prev => ({ ...prev, page: prev.page + 1 }));
    };

    const handlePrevPage = () => {
        setFilters(prev => ({ ...prev, page: prev.page - 1 }));
    };

    const offerColumns = [
        'Client',
        'Titre de projet ',
        'Montant proposé',
        'Délai',
        'Statut',
        'Voir projet',
        'Date de création',
        'Actions'
    ];




    const handleShowProject=(slug)=>{
        navigate(`${routes.entreprise.projectDescription}/${slug}`, {
            state: { from: "ListOffers" } // or "PageB"
        });
    }
    const handleDeleteOffer=async (offerId) => {
        const confirmation = await Swal.fire({
            title: "Êtes-vous sûr ?",
            text: "Cette action est irréversible !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, supprimer !",
            cancelButtonText: "Annuler"
        });

        if (confirmation.isConfirmed) {
            try {
                await deleteOffer(offerId).unwrap();

                Swal.fire({
                    title: "Supprimé !",
                    text: "Le offer a été supprimé.",
                    icon: "success"
                });
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Erreur",
                    text: err || "Une erreur est survenue !"
                });
            }
        }


    }
    const  handleUpdaterOffer=(offer)=>{
        navigate(`${routes.entreprise.updateOffer}/${offer.id}`,{
            state: { projectTitle: offer.projet.titre },
        });
    }
    const handleCreateContract = (offer) => {
        // Add your contract creation logic here
        navigate(`${routes.entreprise.createContract}/${offer.id}`,{
                state:{projectTitle: offer.projet.titre,
                        clientName: offer.projet.client.name,


                },

            }
        );
    };
    const handleMessage=(EnterpriseId,typeAuth)=>{
            console.log(EnterpriseId, typeAuth);
            navigate(`${routes.entreprise.conversation}/${EnterpriseId}`, {
                state: { typeAuth }
            });

    }


    async function handleChangeProjectStatus(offer) {
        const newStatus = offer.statut === "acceptee" ? "refusée" : "acceptée";
        const confirmation = await Swal.fire({
            title: "Êtes-vous sûr ?",
            text: `Voulez-vous terminer le projet de ${offer.projet.client.name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, changer !",
        });

        if (confirmation.isConfirmed) {
            try {
                await entrepriseApi.updateProjet(offer.projet.slug,{}); // Assure-toi que cette fonction retourne une Promise
                Swal.fire({
                    title: "Statut changé !",
                    text: `Le statut du projet de ${offer.projet.client.name} a été changé.`,
                    icon: "success",
                });
            } catch (error) {
                Swal.fire({
                    title: "Erreur",
                    text: "Une erreur est survenue lors de la mise à jour du projet.",
                    icon: "error",
                });
            }
        }

    }

    return (
        <div className="bg-gray-50 h-screen overflow-y-auto p-10 pb-40 font-sans text-gray-800">
            <div className="max-w-7xl mx-auto">
                <Filter
                    filterGroups={filterOfferGroups}
                    filterConfig={filterOfferConfig}
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
                                        <td className="px-6 py-4 whitespace-nowrap">{offer.projet.client?.name || 'N/A'}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{offer.projet?.titre || 'N/A'}</td>

                                        <td className="px-6 py-4 whitespace-nowrap">{offer.montant_propose} €</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{offer.delai} jours</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-sm ${
                                                offer.statut === 'acceptee' ? 'bg-green-100 text-green-800' :
                                                    offer.statut === 'en_attente' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                            }`}>
                                                 {statusLabels[offer.statut] || offer.statut}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="hover:text-blue-600 transition-colors"
                                                    aria-label="Voir les offres"

                                                    onClick={() => handleShowProject(offer.projet.slug)}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </button>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(offer.created_at).toLocaleDateString("fr-FR")}
                                        </td>






                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {offer?.statut !== 'acceptee' ? (
                                                <div className="flex gap-3">
                                                    {/* Edit Button */}
                                                    <button
                                                        aria-label="Modifier l'offre"
                                                        className="text-gray-500 hover:text-blue-600 transition-colors"
                                                        onClick={() => handleUpdaterOffer(offer)}
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                            />
                                                        </svg>
                                                    </button>

                                                    {/* Delete Button */}
                                                    <button
                                                        aria-label="Supprimer l'offre"
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                        onClick={() => handleDeleteOffer(offer.id)}
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex gap-4">
                                                    {/* Message Button with Tooltip */}
                                                    {/* Bouton Message */}
                                                    <div className="relative group">
                                                        <button
                                                            aria-label="Envoyer un message"
                                                            className="text-blue-500 hover:text-blue-700 transition-colors"
                                                            onClick={() => handleMessage(offer.projet?.user_id, "user")}
                                                        >
                                                            <svg
                                                                className="w-5 h-5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={1.5}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
    Envoyer message
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
  </span>
                                                    </div>


                                                    {offer.projet.status === "publie" && offer.statut === "acceptee" ? (
                                                        <div className="relative group">
                                                            <button
                                                                aria-label="Créer un contrat"
                                                                className="text-green-600 hover:text-green-700 transition-colors"
                                                                onClick={() => handleCreateContract(offer)}
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={1.5}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                                    />
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 6v12m6-6H6"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      Créer contrat
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
    </span>
                                                        </div>
                                                    ) :offer.projet.status === "en_cours" ? (
                                                        <div className="relative group">
                                                            <button
                                                                aria-label="Modifier état projet"
                                                                className="text-blue-600 hover:text-blue-700 transition-colors"
                                                                onClick={() => handleChangeProjectStatus(offer)}
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={1.5}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.313l-4.5 1.5 1.5-4.5 12.362-12.826z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      Modifier état
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
    </span>
                                                        </div>
                                                    ):<div></div>}

                                                </div>
                                            )}
                                        </td>                                    </tr>
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

export default ListOfferEnterprise;