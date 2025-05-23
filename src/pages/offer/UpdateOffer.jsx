import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { useOffer } from "../../hooks/useReduxHooks.js";
import Swal from "sweetalert2";
import {routes} from "../../Routes/routesName.js";

export const UpdateOffer = () => {
    const location = useLocation();
    const { status, updateOffer, error ,getOfferById,offers} = useOffer();
    const { projectTitle } = location.state || {};
    const  navigator=useNavigate();
    const {offerId} = useParams();

    const [amount, setAmount] = useState('');
    const [delay, setDelay] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        const offerData = {
            montant_propose: amount,
            delai: delay,
            description: description,

        };
        try {
            e.preventDefault();

            Swal.fire({
                title: "Veuillez patienter...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
          await  updateOffer(offerId,offerData).unwrap()
            Swal.fire({
                icon: "success",
                title: "Succès!",
                text: "Mis à jour le offer avec succès.",
            });
            navigator(routes.entreprise.offer)

        } catch (e) {
       console.log(e.message);
        }
    };
    useEffect(() => {
        const load= async () => {
            await getOfferById(offerId).unwrap();
        }
        load()
    },[])
    useEffect(()=>{
        console.log(offers[0])
        setAmount(offers['0']?.montant_propose);
        setDelay(offers['0']?.delai);
        setDescription(offers['0']?.description);
    },[offers])




    return (
        <div className="bg-gray-50 min-h-screen p-10">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-6">
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M17 9V7a4 4 0 00-8 0v2M5 12h14M12 16v4m0 0H8m4 0h4"/>
                        </svg>
                        Update  offre
                    </h2>
                    <p className="text-sm text-gray-500">Projet : <span className="font-medium text-gray-700">{projectTitle}</span></p>
                </div>

                <div>
                    <label className="text-sm font-medium flex items-center gap-2 text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M17 9V7a4 4 0 00-8 0v2M5 12h14M12 16v4m0 0H8m4 0h4"/>
                        </svg>
                        Montant proposé
                    </label>
                    <div className="mt-1 relative">
                        <input
                            type="number"
                            className="w-full border rounded-md px-4 py-2 pl-10 bg-gray-50"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-600">Commission de plateforme : <span className="font-semibold">5%</span></p>

                <div>
                    <label className="text-sm font-medium text-purple-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                        </svg>
                        Délai (Jour)
                    </label>
                    <input
                        className="w-full mt-1 border rounded-md px-4 py-2 bg-gray-50"
                        type="number"
                        value={delay}
                        onChange={(e) => setDelay(e.target.value)}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-blue-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Description
                    </label>
                    <textarea
                        className="w-full mt-1 border rounded-md px-4 py-2 bg-gray-50 h-32"
                        placeholder="Décrivez votre méthodologie, les livrables"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="text-right">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2 justify-center"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.94 2.94a.75.75 0 011.06 0l12 12a.75.75 0 01-1.06 1.06l-12-12a.75.75 0 010-1.06z"/>
                            <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0z"/>
                        </svg>
                        Soumettre
                    </button>
                </div>
            </div>
        </div>
    );
};
