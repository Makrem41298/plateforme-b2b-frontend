import React from 'react'
import {useNavigate} from "react-router-dom";

function ListProjectEntreprise() {
    const navigate = useNavigate();
    const handleViewProject=()=>{
        navigate('description-project')
    }
    return (
        <div className="bg-gray p-8 font-sans text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6">Projets</h1>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
                <button className="flex items-center gap-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
                    📽️ Vidéo e Animação
                </button>
                <button className="flex items-center gap-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
                    🎵 Música e Áudio
                </button>
                <button className="flex items-center gap-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
                    📝 Escritas
                </button>
                <button className="flex items-center gap-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
                    🔍 Traduções
                </button>
                <button className="flex items-center gap-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
                    🤝 Negócios
                </button>
                <button className="flex items-center gap-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
                    🤖 Serviços com IA
                </button>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project Card - Repeated 8 times */}
                {[...Array(8)].map((_, index) => (



                    <div key={index} onClick={handleViewProject} className="bg-white border rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/400x200?text=Logo"
                                alt="Logo"
                                className="w-full h-40 object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-white rounded-tl-lg px-2 py-1 shadow text-sm">📄</div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center mb-2">
                                <img
                                    src="https://i.pravatar.cc/24"
                                    alt="avatar"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="text-sm font-semibold">Finn</span>
                                <span className="text-sm text-gray-400 ml-1">@finnthehuman</span>
                            </div>
                            <h2 className="text-sm font-bold mb-1">Preciso de um profissional para melhorar minha logo!</h2>
                            <p className="text-xs text-gray-500 mb-3">
                                Já possuo uma logo definida, gostaria de atualizar com elementos do meu...
                            </p>
                            <p className="text-sm font-semibold text-gray-700">
                                Valor estimado: <span className="text-green-600">R$ 500,00</span>
                            </p>
                        </div>
                        <div className="px-4 pb-4">
                            <div className="w-full h-2 bg-blue-100 rounded-full mt-3"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10 text-sm mb-20" >
                <button className="px-4 py-2 border rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                    ‹ précédent
                </button>
                <button className="px-4 py-2 border rounded-md bg-blue-100 text-blue-700 font-semibold">1</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 text-gray-600">2</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 text-gray-600">3</button>
                <span className="px-2">...</span>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 text-gray-600">7</button>
                <button className="px-4 py-2 border rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                    suivant ›
                </button>
            </div>
        </div>
    )
}

export default ListProjectEntreprise