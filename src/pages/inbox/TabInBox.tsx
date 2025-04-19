import {useNavigate} from "react-router-dom";

function TabInBox() {
    const navigate = useNavigate();
    const handelMessage=()=>{
        navigate('Conversation ');
    }
    return (

        <div className=" mx-auto rounded-xl shadow-sm p-6
            bg-gray p-8 font-sans text-gray-800
             h-screen overflow-y-auto">


            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Inbox</h1>


            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">

                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search mail"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
                </div>

                <div className="flex gap-3 justify-end">
                    <button className="text-gray-600 hover:text-gray-900" title="Mark as read">📥</button>
                    <button className="text-gray-600 hover:text-gray-900" title="Archive">🗃️</button>
                    <button className="text-gray-600 hover:text-gray-900" title="Delete">🗑️</button>
                </div>
            </div>

            <div className="overflow-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-100">
                    <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-700">

                    {([...Array(20)].map((item,index) => (
                        <tr onClick={handelMessage} className="hover:bg-gray-50 transition">
                            <td className="px-4 py-3">
                                <input type="checkbox"/>
                            </td>
                            <td className="px-2 py-3">
                                ⭐
                            </td>
                            <td className="px-4 py-3 font-medium">Jullu Jalal</td>
                            <td className="px-4 py-3 text-gray-600 truncate">Our Bachelor of Commerce program is
                                ACBSP-accredited.
                            </td>
                            <td className="px-4 py-3 text-right text-gray-400 whitespace-nowrap">8:38 AM</td>
                        </tr>

                    )))
                    }


                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <p>Showing 1–12 of 1,253</p>
                <div className="space-x-2">
                    <button className="px-2 py-1 border rounded hover:bg-gray-100">‹</button>
                    <button className="px-2 py-1 border rounded hover:bg-gray-100">›</button>
                </div>
            </div>
        </div>
    )
}

export default TabInBox
