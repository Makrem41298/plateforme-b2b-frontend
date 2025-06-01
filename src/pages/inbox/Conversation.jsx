import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {useMessage, useOffer} from "../../hooks/useReduxHooks.js";
import Loader from "../../components/Loader.jsx";

const Conversation = () => {
    const navigate = useNavigate();
    const { enterpriseId } = useParams();
    const location = useLocation();
    const typeAuth = location.state?.typeAuth;
    const offerId= location.state?.offer?.id;
    const statusOffer = location.state?.offer?.statut;
    const [offerStatus, setOfferStatus] = useState(statusOffer);



    const { messages, status, error, getConversationClient, sendMessage, getConversationEnterprise, sendMessageEnterprise } = useMessage();
const {updateOfferClient,status:statutOffer,error:erroOffer}=useOffer()
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
        console.log(statusOffer)
        console.log(offerId)

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

    const handleAcceptOffer=async () => {
        await updateOfferClient(offerId, {statut: "acceptee"}).unwrap();
        setOfferStatus("acceptee")
    }


    const handleRejectOffer=async () => {
        await updateOfferClient(offerId, {statut: "rejetee"});
        setOfferStatus("rejetee")
    }

    return (
            <div >




                <div className="max-w-4xl mx-auto bg-white shadow rounded-xl mt-6 flex flex-col h-[calc(100vh-160px)]">
                    {typeAuth === 'entreprise' && offerStatus === 'en_attente' && (
                        <div>
                            <div className="max-w-4xl mx-auto px-4">
                                <div className="flex flex-col items-center space-y-4">
                                    {/* Question */}
                                    <p className="text-lg font-semibold text-gray-800 text-center">
                                        Voulez-vous accepter cette offre ?
                                    </p>

                                    <div className="flex gap-4 sm:gap-6">
                                        <button
                                            type="button"
                                            onClick={handleAcceptOffer}
                                            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                                            aria-label="Accepter l'offre"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Accepter</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleRejectOffer}
                                            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                                            aria-label="Refuser l'offre"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>Refuser</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

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
            </div>
    );
};

export default Conversation;