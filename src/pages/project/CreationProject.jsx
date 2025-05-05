import React, { useState, useEffect } from 'react';
import { useProject } from '../../hooks/useReduxHooks.js';
import { useNavigate } from 'react-router-dom';
import {routes} from "../../Routes/routesName.js";
import Swal from "sweetalert2";

const CreationProject = () => {
    const navigate = useNavigate();
    const { createProject, status, error, clearProjectStatus } = useProject();

    // form state
    const [formData, setFormData] = useState({
        titre: '',
        budget: '',
        Delai: '',
        type: '',
        description: ''
    });

    // handle input changes
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    useEffect(() => {
        if (status==="loading") {
            Swal.fire({
                title: "Loading...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
        }

    },[status])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Optional: Show loading
        Swal.fire({
            title: "Veuillez patienter...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });


            await createProject(formData).unwrap();

            Swal.fire({
                icon: "success",
                title: "Succès!",
                text: "Projet créé avec succès.",
            });
            navigate(routes.client.mesProjects)

    };




    return (
        <div className="bg-gray-50 min-h-screen p-6 pb-20 flex items-center justify-center">
            <div className="w-full max-w-3xl border rounded-lg p-6 bg-white shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Créer un nouveau projet</h2>

                {status === 'failed' && (
                    <div className="text-red-600 mb-4">Erreur: {error}</div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                            <input
                                name="titre"
                                type="text"
                                onChange={handleChange}
                                placeholder="Entrez le nom du projet"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Budget maximal</label>
                            <input
                                name="budget"
                                type="number"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="Entrez le budget maximal"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Délai</label>
                            <input
                                name="Delai"
                                type="number"
                                value={formData.Delai}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Sélectionnez le type de projet</option>
                                <option value="developpement_web">Développement Web</option>
                                <option value="developpement_mobile">Application Mobile</option>
                                <option value="design_graphique">Design</option>
                                <option value="marketing_digital">Marketing Digital</option>
                                <option value="redaction_de_contenu">Rédaction de Contenu</option>
                                <option value="conseil_en_affaires">Conseil en Affaires</option>
                                <option value="intelligence_artificielle">Intelligence Artificielle</option>
                                <option value="autre">Autre</option>

                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            placeholder="Ajoutez une description détaillée"
                            required
                        ></textarea>
                    </div>

                    <div className="pt-4 text-center">
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Publication...' : 'Publier'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreationProject;
