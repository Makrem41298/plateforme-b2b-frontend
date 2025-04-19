import React from 'react'
import { useNavigate } from "react-router-dom";

const Conversation = () => {
    const navigate = useNavigate();

    const handelContarct = () => {
        navigate('/contract/creation');
    }

    return (
        // Main container with fixed height and flex layout
        <div className="max-w-4xl mx-auto bg-white shadow rounded-xl mt-6 flex flex-col h-[calc(100vh-160px)]">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
                <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-gray-700 text-lg">←</button>
                    <h2 className="text-lg font-semibold text-gray-800">Minerva Barnett</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handelContarct}
                            className="text-sm px-3 py-1 border rounded-full hover:bg-gray-100">
                        Créer un nouveau Contrat ➕
                    </button>
                </div>
            </div>

            {/* Messages container with flex-1 and scrolling */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                {/* Example messages */}
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                        <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xl">
                            <p className="text-sm text-gray-800">It is a long established fact that a reader will be
                                distracted by the readable content of a page...</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">6:30 pm</div>
                    </div>
                </div>

                {/* More messages... (keep all existing message elements) */}

            </div>

            {/* Input area */}
            <div className="border-t px-6 py-4 flex items-center gap-3">
                <input type="text" placeholder="Write message"
                       className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"/>
                <button title="Attach" className="text-gray-500 hover:text-gray-700">📎</button>
                <button title="Send"
                        className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 text-sm flex items-center gap-1">
                    Send
                </button>
            </div>
        </div>
    )
}

export default Conversation