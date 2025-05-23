import React, { useState, useEffect } from 'react';
import { useProject } from "../../hooks/useReduxHooks.js";
import Filter from "../../components/Filter.jsx";
import {NameProjectColumns,filterProjectGroups,filterProjectConfig} from "/src/data.js"
import Swal from "sweetalert2";
import {NavLink, useNavigate} from "react-router-dom";
import {routes} from "../../Routes/routesName.js";

const ListProjectClient = () => {

    const [filters, setFilters] = useState({
        budget_min: '0',
        budget_max: '',
        type: '',
        sort_budget: '',
        sort_date: '',
        date_start: new Date().toISOString().split('T')[0],
        sort_field: '',
        sort_order: '',
        date_end: '',
        per_page: '10',
    });
    const { projects, status, getProjects, deleteProject,clearProjectStatus } = useProject();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [searchQuery, setSearchQuery] = useState('');


    const handleFilterChange = (filterId, value) => {

            setFilters(prev => ({ ...prev, [filterId]: value }));

    };

    const handleReset = () => {
        setFilters({
            titre: '',
            budget_min: '',
            budget_max: '',
            type: '',
            sort_budget: '',
            sort_date: '',
            date_start: '',
            date_end: '',
            per_page: '10',
        });
        setSearchQuery('');
        setErrors({});
    };
    useEffect(()=>{
        setFilters(prev => ({ ...prev, titre: searchQuery }));

    },[searchQuery]);
    useEffect(() => {
        for (const key in filters) {
            if (filters[key] === "") {
                delete filters[key];
            }
        }
        clearProjectStatus()
        getProjects(filters);
    }, [filters]);

    useEffect(() => {
        clearProjectStatus()
        getProjects();
    }, []);

    const handlePrevPage = () => {
        clearProjectStatus()

        getProjects({ page: projects.current_page - 1 });
    };

    const handleNextPage = () => {
        clearProjectStatus()

        getProjects({ page: projects.current_page + 1 });
    };

    const handleDeleteProject = async (slug) => {
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
                await deleteProject(slug).unwrap();
                Swal.fire({
                    title: "Supprimé !",
                    text: "Le projet a été supprimé.",
                    icon: "success"
                });
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Erreur",
                    text: err || "Une erreur est survenue !"
                });
            }
        }    };
    const handelUpadeProject=(slug)=>{
        navigate(`${routes.client.updateProjectClient}/${slug}`);

    }
    const handelShowOfferProject=(slug)=>{
        navigate(`${routes.client.offer}/${slug}`);
    }

    return (
        <div className="bg-gray-50 h-screen overflow-y-auto p-10 pb-40 font-sans text-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Mes Projets</h1>
                    <NavLink to={routes.client.createProject}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"

                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        Ajouter un projet
                    </NavLink>
                </div>

                <Filter
                    filterGroups={filterProjectGroups}
                    filterConfig={filterProjectConfig}
                    filters={filters}
                    errors={errors}
                    onFilterChange={handleFilterChange}
                    onReset={handleReset}
                    onSearch={setSearchQuery}
                    searchQuery={searchQuery}
                />

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className={`p-4 md:p-2 ${status === "loading" ? "opacity-30 pointer-events-none" : "opacity-100"}`}>
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white shadow-sm rounded-xl overflow-hidden overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100 text-gray-600 text-sm font-semibold">
                                    <tr>
                                        {NameProjectColumns.map((tab) => (
                                            <th
                                                key={tab}
                                                className="px-6 py-3 text-left whitespace-nowrap"
                                            >
                                                {tab}
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                                    {projects.data?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">{item.titre}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                        <span className={`w-3 h-3 rounded-full ${
                                                            item.status === "publie" ? "bg-blue-600" :
                                                                item.status === "Termine" ? "bg-green-600" : "bg-yellow-600"
                                                        }`}></span>
                                                    {item.status}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.budget}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="hover:text-blue-600 transition-colors" aria-label="Voir les offres"
                                                        onClick={()=>handelShowOfferProject(item.slug)}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.Delai}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {new Date(item.created_at).toLocaleDateString("fr-FR")}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    <button className="text-gray-500 hover:text-blue-600 transition-colors" onClick={()=>handelUpadeProject(item.slug)} >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProject(item.slug)}
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
                                Affichage {projects.from ?? 0}–{projects.to ?? 0} sur {projects.total ?? 0}
                            </div>

                            <div className="flex items-center space-x-2">
                                <button
                                    className="flex items-center px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                                    onClick={handlePrevPage}
                                    disabled={projects.current_page === 1}
                                    aria-label="Page précédente"
                                >
                                    <svg
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
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ListProjectClient;