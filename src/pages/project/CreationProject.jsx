import React from 'react';

const CreationProject = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-10 flex items-center justify-center">
            <div className="w-full max-w-5xl border-2 rounded-md p-8 bg-white">

                <h2 className="text-xl font-semibold text-gray-800 mb-6">Créer un nouveau projet</h2>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                            <input
                                type="text"
                                placeholder="Entrez le nom du projet"
                                className="w-full border border-gray-200 rounded-md px-4 py-2 bg-gray-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Budget maximal</label>
                            <input
                                type="text"
                                placeholder="Entrez le budget maximal"
                                className="w-full border border-gray-200 rounded-md px-4 py-2 bg-gray-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Délai</label>
                            <input
                                type="text"
                                placeholder="Entrez le délai du projet"
                                className="w-full border border-gray-200 rounded-md px-4 py-2 bg-gray-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
                            <select className="w-full border border-gray-200 rounded-md px-4 py-2 bg-gray-50">
                                <option>Sélectionnez le type de projet</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            className="w-full border border-gray-200 rounded-md px-4 py-2 bg-gray-50 h-28"
                            placeholder="Ajoutez une description détaillée"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                        >
                            Publier
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreationProject;
