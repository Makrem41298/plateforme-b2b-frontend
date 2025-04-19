import React from 'react';
import Filter from "./Filter.jsx";

function Table({ attributTab ,titre,attrubuteFilter}) {

    return (
        <div className="p-4 md:p-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">{titre}</h1>

                {/* Barre de filtres */}
                    <Filter attrubuteFiltre={attrubuteFilter} />
                {/* Tableau */}
                <div className="bg-white shadow-sm rounded-xl overflow-hidden overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100 text-gray-600 text-sm font-semibold">
                        <tr>
                            {attributTab.map((tab, index) => (
                                <th
                                    key={tab.id || index} // Préférable d'utiliser un identifiant unique si disponible
                                    className="px-6 py-3 text-left whitespace-nowrap"
                                >
                                    {tab}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                        <tr>
                            {attributTab.map((_, index) => (
                                <td
                                    key={index}
                                    className="px-6 py-4"
                                >
                                    {/* Données dynamiques */}
                                </td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                    <div className="text-sm text-gray-500 px-6 py-4">
                        Affichage 1-09 sur 78
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;