import React, { useEffect } from "react";
import { useContract } from "../../hooks/useReduxHooks.js";
import {routes} from "../../Routes/routesName.js";
import {useLocation, useNavigate} from "react-router-dom";

function TabContract() {
    const { contracts, status, getAllContracts,getAllContractsClient } = useContract();
    const location = useLocation();
    const isClient = location.pathname.includes("client");
    const navigate=useNavigate();

    useEffect(() => {
        if (isClient)
            getAllContractsClient();
        else
        getAllContracts();
    }, []);

    const attributTab = [
        "Référence",
        "Statut",
        "Projet associé",
        "Date de début",
        "Date de fin",
        "Actions",
    ];

    const handlePrevPage = () => {
        if (contracts.current_page > 1) {
            getAllContracts({ page: contracts.current_page - 1 });
        }
    };

    const handleNextPage = () => {
        if (contracts.current_page < contracts.last_page) {
            getAllContracts({ page: contracts.current_page + 1 });
        }
    };

    const handleShowProject=(slug)=>{
        console.log(slug)
        navigate(`${routes.entreprise.projectDescription}/${slug}`, {
            state: { from: "ListOffers" } // or "PageB"
        });
    }
    const handleShowContract=(reference)=>{
        if (isClient)
            navigate(`${routes.client.showContract}/${reference}`, {})
        else
        navigate(`${routes.entreprise.showContract}/${reference}`, {})
    }

    return (
        <div className="bg-gray-50 h-screen overflow-y-auto p-10 pb-40 font-sans text-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Mes Contrats</h1>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div
                        className={`p-4 md:p-2 ${
                            status === "loading" ? "opacity-30 pointer-events-none" : "opacity-100"
                        }`}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white shadow-sm rounded-xl overflow-hidden overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    {/* En-têtes du tableau */}
                                    <thead className="bg-gray-100 text-gray-600 text-sm font-semibold">
                                    <tr>
                                        {attributTab.map((tab) => (
                                            <th
                                                key={tab}
                                                className="px-6 py-3 text-left whitespace-nowrap"
                                            >
                                                {tab}
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>

                                    {/* Corps du tableau */}
                                    <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                                    {contracts.data?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            {/* 1. Référence */}
                                            <td className="px-6 py-4 whitespace-nowrap">{item.reference}</td>

                                            {/* 2. Statut (avec pastille colorée) */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                            <span
                                className={`w-3 h-3 rounded-full ${
                                    item.status === "publie"
                                        ? "bg-blue-600"
                                        : item.status === "Termine"
                                            ? "bg-green-600"
                                            : "bg-yellow-600"
                                }`}
                            ></span>
                                                    {item.status}
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="hover:text-blue-600 transition-colors"
                                                        aria-label="Voir les offres"

                                                        onClick={() => handleShowProject(contracts.data[0].offre.projet.slug)}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </button>
                                            </td>


                                            {/* 4. Date de début */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.date_debut
                                                    ? new Date(item.date_debut).toLocaleDateString("fr-FR")
                                                    : "-"}
                                            </td>

                                            {/* 5. Date de fin */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.date_fin
                                                    ? new Date(item.date_fin).toLocaleDateString("fr-FR")
                                                    : "-"}
                                            </td>

                                            {/* 6. Actions (éditer / supprimer) */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    {/* Bouton Voir le contrat (nouvelle icône SVG) */}
                                                    <button
                                                        className="text-gray-500 hover:text-blue-600 transition-colors"
                                                        onClick={() => handleShowContract(item.reference)}

                                                        title="Voir le contrat"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-5 h-5"
                                                            height="24px"
                                                            viewBox="0 -960 960 960"
                                                            width="24px"
                                                            fill="#1f1f1f"
                                                        >
                                                            <path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                            Affichage {contracts.from ?? 0}–{contracts.to ?? 0} sur {contracts.total ?? 0}
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                className="flex items-center px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                                onClick={handlePrevPage}
                                disabled={contracts.current_page === 1}
                                aria-label="Page précédente"
                            >
                                <svg
                                    className="h-4 w-4 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <span className="px-3 py-1.5 text-gray-600">
                Page {contracts.current_page}
              </span>

                            <button
                                className="flex items-center px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                                onClick={handleNextPage}
                                disabled={contracts.current_page === contracts.last_page}
                                aria-label="Page suivante"
                            >
                                <svg
                                    className="h-4 w-4 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContract;
