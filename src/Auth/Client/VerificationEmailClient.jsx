import React, {useContext} from 'react'
import axiosInstanceClient from "../../services/axiosInstanceClient.js";
import {AuthClientContext} from "../../services/AuthClientContext.jsx";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routesName.js";

const VerificationEmailClient = () => {
const {logout}=useContext(AuthClientContext)
    const navigate = useNavigate();
   const handelResendEmail=()=>{
        axiosInstanceClient.post('/email/resend').then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

    }
    const handelLogout=()=>{
        logout()
        navigate(routes.loginClient.path);

    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">

            <div className="flex-1 overflow-x-hidden">
                <div className="p-4 md:p-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
                            <div className="mb-6 text-blue-500">
                                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                </svg>
                            </div>

                            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Vérifiez votre adresse email</h1>
                            <p className="text-gray-600 mb-6">
                                Un lien de vérification a été envoyé à votre adresse email <span className="font-medium text-blue-500">moni@enterprise.com</span>.
                                Veuillez cliquer sur le lien pour activer votre compte.
                            </p>

                            <div className="space-y-4">
                                <button className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" onClick={handelResendEmail}>
                                    <i className="fas fa-paper-plane mr-2"></i>Renvoyer l'email de vérification
                                </button>

                                <div className="text-sm text-gray-500 mt-6">
                                    Vous avez déjà un compte vérifié?
                                    <a href="#" className="text-blue-500 hover:text-blue-700 ml-1">Se connecter</a>
                                </div>

                                    <button type="submit" className="text-red-500 hover:text-red-700 text-sm flex items-center justify-center w-full" onClick={handelLogout}>
                                        <i className="fas fa-sign-out-alt mr-2"></i>Déconnexion
                                    </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationEmailClient
