import React from 'react'

export const CreateOffer = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-6">


            <div className="space-y-1">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2"
                         viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M17 9V7a4 4 0 00-8 0v2M5 12h14M12 16v4m0 0H8m4 0h4"/>
                    </svg>

                </h2>
                <p className="text-sm text-gray-500">Projet : <span className="font-medium text-gray-700">Refonte Site E-commerce</span>
                </p>
            </div>


            <div>
                <label className="text-sm font-medium flex items-center gap-2 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M17 9V7a4 4 0 00-8 0v2M5 12h14M12 16v4m0 0H8m4 0h4"/>
                    </svg>
                    Montant proposé
                </label>
                <div className="mt-1 relative">
                    <input type="number" className="w-full border rounded-md px-4 py-2 pl-10 bg-gray-50" value="5000"/>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5"
                             viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                        </svg>
                    </div>
                </div>
            </div>

            <p className="text-sm text-gray-600">Commission de plateforme : <span className="font-semibold">5%</span>
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-sm font-medium text-purple-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3"/>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                        </svg>
                        Délai
                    </label>
                    <select className="w-full mt-1 border rounded-md px-4 py-2 bg-gray-50">
                        <option>30</option>
                        <option>60</option>
                        <option>90</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Date de publication
                    </label>
                    <input type="date" className="w-full mt-1 border rounded-md px-4 py-2 bg-gray-50"/>
                </div>
            </div>


            <div>
                <label className="text-sm font-medium text-blue-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Description
                </label>
                <textarea className="w-full mt-1 border rounded-md px-4 py-2 bg-gray-50 h-32"
                          placeholder="Décrivez votre méthodologie, les livrable"></textarea>
            </div>


            <div className="text-right">
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2 justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.94 2.94a.75.75 0 011.06 0l12 12a.75.75 0 01-1.06 1.06l-12-12a.75.75 0 010-1.06z"/>
                        <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0z"/>
                    </svg>
                    Soumettre
                </button>
            </div>
        </div>
        </div>
    )
}
