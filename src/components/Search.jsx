import React from 'react';

const Search = ({ onSearch }) => {
    return (
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors">
            <i className="fas fa-search mr-2 text-gray-500"></i>
            <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none w-full placeholder-gray-400"
                aria-label="Search"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;
