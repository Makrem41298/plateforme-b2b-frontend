import React, { useEffect } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import { useProjectEnterprise } from '../../hooks/useReduxHooks.js';
import {routes} from "../../Routes/routesName.js";

export const DescriptionProject = () => {
    const { slug } = useParams();
    const location = useLocation();
    const fromPage = location.state?.from;
    const { status, getProjectEnterpriseBySlug, error, projects } = useProjectEnterprise();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            getProjectEnterpriseBySlug(slug).unwrap()
        }
    }, []);

    const handleSubmitOffer = (project) => {
        navigate(routes.entreprise.createOffer, { state: { projectTitle: project.titre,projectId: project.id } });
      };


    if (status === 'loading') {
        return <div className="text-center mt-10">Chargement...</div>;
    }

    if (error) {
        return (
            <div className="text-center mt-10 text-red-600">
                Une erreur est survenue&nbsp;: {error}
            </div>
        );
    }

    const project = Array.isArray(projects)
        ? projects.find((p) => p.slug === slug) || {}
        : projects || {};

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 h-screen pb-20 pt-8 font-sans text-gray-800 overflow-auto">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 space-y-8 hover:shadow-2xl transition-shadow duration-300">

                    <div className="space-y-4 border-b pb-6">
                        <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                {project.type?.replace(/_/g, ' ').toUpperCase()}
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                    project.status === 'publie'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-gray-100 text-gray-700'
                                }`}
                            >
                {project.status}
              </span>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
                            {project.titre || 'Titre du projet'}
                        </h1>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>
                <i className="far fa-calendar-alt mr-2"></i>
                  {new Date(project.created_at).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                  })}
              </span>
                            <span>•</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
                            <div className="p-3 bg-blue-600 rounded-lg">
                                <i className="fas fa-wallet text-white text-2xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Budget</p>
                                <p className="text-2xl font-bold text-blue-600">
                                    {project.budget ? `${project.budget}€` : 'Budget flexible'}
                                </p>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-xl flex items-center space-x-4">
                            <div className="p-3 bg-purple-600 rounded-lg">
                                <i className="fas fa-clock text-white text-2xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Délai de réalisation</p>
                                <p className="text-2xl font-bold text-purple-600">
                                    {project.Delai} jours
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 tracking-wide">
                            <i className="fas fa-file-alt text-gray-400"></i>
                            <span>Détails du projet</span>
                        </h3>
                        <div
                            className="prose max-w-none text-gray-700 leading-relaxed
                         max-h-60 overflow-y-auto break-words
                         scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
                         px-2 py-1 bg-gray-50 rounded-lg"
                        >
                            {project.description || 'Aucune description fournie'}
                        </div>
                    </div>

                    {!fromPage ? (
                        <div className="border-t pt-6">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                                <div className="text-gray-500 text-sm">
                                    <p>Vous avez des questions sur ce projet ?</p>
                                    <p className="font-medium">Contactez-nous pour discuter des détails</p>
                                </div>
                                <button
                                    onClick={() => handleSubmitOffer(project)}
                                    className="bg-gradient-to-r from-blue-600 to-blue-700
                   hover:from-blue-700 hover:to-blue-800
                   text-white px-8 py-4 rounded-xl
                   transition-all transform hover:scale-[1.02]
                   flex items-center space-x-3
                   focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    <i className="fas fa-paper-plane text-lg"></i>
                                    <span className="font-semibold text-lg">Soumettre une offre</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}

                </div>
            </div>
        </div>
    );

};
