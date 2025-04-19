import React from 'react'

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">

            <div className="flex-1 overflow-x-hidden">

                <div className="p-4 md:p-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
                            <div className="mb-6 text-blue-500">
                                <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                                </svg>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Non Trouvée</h1>
                            <p className="text-gray-600 mb-6">
                                Oups! La page que vous recherchez semble avoir disparu dans l'espace numérique.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
