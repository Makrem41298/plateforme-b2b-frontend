import React, { useState } from 'react';
import Search from './Search';

const Filter = ({
                    filterGroups,
                    filterConfig,
                    filters,
                    errors,
                    onFilterChange,
                    onReset,
                    onSearch,

                }) => {
    const [activeGroup, setActiveGroup] = useState(null);

    const getGroupConfig = (groupId) =>
        filterGroups.find(g => g.id === groupId);

    const handleSortChange = (value) => {
        if (value.includes('_')) {
            const [field, order] = value.split('_');
            onFilterChange('sort_field', field);
            onFilterChange('sort_order', order);
        } else {
            onFilterChange('sort_field', '');
            onFilterChange('sort_order', '');
        }
    };
    const handleSerch= (e) => {
        onSearch(e)


    }

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-xl shadow-sm mx-2 mb-6 gap-4">
            {/* Filters Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 flex-1 w-full">
                <div className="flex items-center gap-2 shrink-0">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Filtrer par</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 flex-1 w-full">
                    {filterGroups.map(group => (
                        <button
                            key={group.id}
                            onClick={() => setActiveGroup(group.id)}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium"
                        >
                            {group.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter Modals */}
            {activeGroup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96 max-w-full">
                        <h3 className="text-lg font-semibold mb-4">
                            {getGroupConfig(activeGroup).label}
                        </h3>

                        {getGroupConfig(activeGroup).fields.map(fieldId => {
                            const field = filterConfig.find(f => f.id === fieldId);

                            if (field.id === 'sort') {
                                return (
                                    <div key={field.id} className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {field.placeholder}
                                        </label>
                                        <select
                                            className={`w-full p-2 border rounded-md ${
                                                errors[field.id] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            value={`${filters.sort_field}_${filters.sort_order}`}
                                            onChange={(e) => handleSortChange(e.target.value)}
                                        >
                                            <option value="">{field.placeholder}</option>
                                            {field.options.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                );
                            }

                            return (
                                <div key={field.id} className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {field.placeholder}
                                    </label>
                                    {field.type === 'select' ? (
                                        <select
                                            className={`w-full p-2 border rounded-md ${
                                                errors[field.id] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            value={filters[field.id]}
                                            onChange={(e) => onFilterChange(field.id, e.target.value)}
                                        >
                                            <option value="">{field.placeholder}</option>
                                            {field.options.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type}
                                            className={`w-full p-2 border rounded-md ${
                                                errors[field.id] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            value={filters[field.id]}
                                            onChange={(e) => onFilterChange(field.id, e.target.value)}
                                            placeholder={field.placeholder}
                                        />
                                    )}
                                    {errors[field.id] && (
                                        <span className="text-red-500 text-sm">{errors[field.id]}</span>
                                    )}
                                </div>
                            );
                        })}

                        <div className="mt-4 flex justify-end gap-2">

                            <button
                                onClick={() => setActiveGroup(null)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Appliquer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch w-full md:w-auto gap-4">
                <div className="flex items-center justify-between gap-4 order-2 sm:order-1">
                    <button
                        onClick={onReset}
                        className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 px-3 py-2 rounded-md hover:bg-red-50 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Réinitialiser
                    </button>
                </div>

                <div className="w-full sm:w-64 order-1 sm:order-2">
                    <Search  onSearch={handleSerch} />
                </div>
            </div>
        </div>
    );
};

export default Filter;