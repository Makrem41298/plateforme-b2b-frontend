import React, {useEffect} from 'react'
import Table from "../../components/Table.jsx";
import {useProject} from "../../hooks/useReduxHooks.js";
import Filter from "../../components/Filter.jsx";

const ListProjectClient = () => {
    const entetesTableau = [
        "nom de Projet",
        "Statut",
        "Budget",
        "Offers",
        "Délai",
        "Date de publication",
        "Action"
    ];
    const {projects, status, error, getProjects, deleteProject} = useProject();
    const attributeFilter = ['test', 'test', 'test']

    useEffect(() => {
        getProjects()
    }, [])

    const handlePrevPage = () => {
        getProjects({page: projects.current_page - 1})
    }

    const handleNextPage = () => {
        getProjects({page: projects.current_page + 1})
    }

    return (
        <div className="bg-gray-50 h-screen overflow-y-auto p-10 pb-40 font-sans text-gray-800">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Mes Projets</h1>
                <Filter attrubuteFiltre={["test","test","test"]}  />

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <Table
                        data={projects}
                        status={status}
                        attributTab={entetesTableau}
                    />

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                            Affichage {projects.from}–{projects.to} sur {projects.total}
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                className="flex items-center px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                                onClick={handlePrevPage}
                                disabled={projects.current_page === 1}
                                aria-label="Page précédente"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            <span className="px-3 py-1.5 text-gray-600">
            Page {projects.current_page}
        </span>

                            <button
                                className="flex items-center px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                                onClick={handleNextPage}
                                disabled={projects.current_page === projects.last_page}
                                aria-label="Page suivante"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>                </div>
            </div>
        </div>
    )
}

export default ListProjectClient