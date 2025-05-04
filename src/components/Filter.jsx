import React from 'react'
import Search from "../components/Search.jsx";

const Filter = ({attrubuteFiltre}) => {
    return (
        <div className="flex flex-wrap items-center bg-white p-4 rounded-xl shadow-sm ml-2 mr-2 p-4 md:p-2  gap-2 mb-6 ">
            <div className="flex items-center space-x-2 border-r pr-4">
                <div className="text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                    </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Filtrer par</span>
            </div>



            {attrubuteFiltre.map((item, index) => (
                <div key={index} className="px-4">
                    <select className="text-sm text-gray-700 bg-transparent focus:outline-none">
                        <option>{item}</option>
                    </select>
                </div>
            ))}



            <div className="ml-auto pr-2">
                <button className="text-sm text-red-500 hover:underline flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M19 5H9m0 0l1.5 1.5M9 5v10a1 1 0 001 1h5.586l-2.293 2.293a1 1 0 001.414 1.414L19 17.414V11a1 1 0 00-1-1h-4V5z" />
                    </svg>
                    <span>Réinitialiser</span>
                </button>
            </div>

            <div className="ml-auto w-full md:w-auto mt-2 md:mt-0">
              <Search/>
            </div>
        </div>
    )
}
export default Filter
