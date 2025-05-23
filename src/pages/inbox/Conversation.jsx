import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMessage } from "../../hooks/useReduxHooks.js";
import Loader from "../../components/Loader.jsx";

const Conversation = () => {
    const navigate = useNavigate();
    const { enterpriseId } = useParams();
    const location = useLocation();
    const typeAuth = location.state?.typeAuth;
    const { messages, status, error, getConversationClient, sendMessage, getConversationEnterprise, sendMessageEnterprise } = useMessage();

    const [partnerName, setPartnerName] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const fetchConversation = async () => {
            try {
                let data;
                if (typeAuth === 'entreprise') {
                    const response = await getConversationClient(enterpriseId, typeAuth);
                    data = response?.data || [];
                } else if (typeAuth === 'user') {
                    const response = await getConversationEnterprise(enterpriseId, typeAuth);
                    data = response?.data || [];
                }

                const partner = data.find(
                    msg => msg.sender.id.toString() !== enterpriseId.toString()
                );
                if (partner) setPartnerName(partner.sender.name);
            } catch (err) {
                console.error('Error fetching conversation:', err);
            }
        };

        if (enterpriseId && typeAuth) {
            fetchConversation();
        }
    }, [enterpriseId, typeAuth]);

    const handleContract = () => {
        navigate('/contract/creation');
    };

    const handleSend = async () => {
        const data = {
            receiver_id: enterpriseId,
            receiver_type: typeAuth,
            content: newMessage,
        };
        if (typeAuth === 'entreprise') {
            await sendMessage(data).unwrap();
            setNewMessage('');
        }else {
            await sendMessageEnterprise(data).unwrap();
            setNewMessage('');
        }

    };

    const transformedMessages = messages.map(msg => ({
        sender: msg.sender_type.includes('Entreprise') ? 'entreprise' : 'user',
        text: msg.content,
        time: msg.created_at
            ? new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : ''
    }));

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    }, [transformedMessages]);

    return (
        <div className="max-w-4xl mx-auto bg-white shadow rounded-xl mt-6 flex flex-col h-[calc(100vh-160px)]">
            <div className="flex justify-between items-center px-6 py-4 border-b">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-700 text-lg">←</button>
                    <h2 className="text-lg font-semibold text-gray-800">{partnerName || 'Conversation'}</h2>
                </div>
                {typeAuth !== 'entreprise' && (
                    <button
                        onClick={handleContract}
                        className="text-sm px-3 py-1 border rounded-full hover:bg-gray-100"
                    >
                        Créer un nouveau Contrat ➕
                    </button>
                )}
            </div>

            {status === 'loading' ? <Loader /> : (
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                    {transformedMessages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender !== typeAuth ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className="max-w-xl">
                                <div
                                    className={`px-4 py-2 rounded-lg text-sm ${
                                        msg.sender !== typeAuth
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                >
                                    <p>{msg.text}</p>
                                </div>
                                <div
                                    className={`text-xs text-gray-400 mt-1 ${
                                        msg.sender === typeAuth ? 'text-right' : ''
                                    }`}
                                >
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            )}

            <div className="border-t px-6 py-4 flex items-center gap-3">
                <input
                    type="text"
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Écrire un message"
                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 text-sm"
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
};

export default Conversation;