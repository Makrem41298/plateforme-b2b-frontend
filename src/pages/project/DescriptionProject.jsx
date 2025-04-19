import React from 'react'
import {useNavigate} from "react-router-dom";

export const DescriptionProject = () => {
    const navigate = useNavigate();

    const handleSubmaitOffer=()=>{
        navigate("/enterprise/project/Create-offer");
    }
    return (
        <div className="bg-gray pb-20 pt-5 font-sans text-gray-800 h-screen overflow-y-auto">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6 ">

                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Refonte Site E-commerce</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Publié par{" "}
                        <a href="#" className="text-blue-600 hover:underline font-medium">
                            Sophie Martin
                        </a>
                    </p>
                </div>

                <div className="flex items-center gap-4 text-gray-700">
                    <p className="text-lg font-semibold">$ 5000 - 8000</p>
                    <span className="text-sm flex items-center gap-1">
                        <i className="fas fa-clock" aria-hidden="true"></i> 30 jours
                    </span>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Description :</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Dans le cadre de l’amélioration de l’expérience utilisateur et de la gestion des contenus, nous entreprenons
                        le redéveloppement complet d’un site e-commerce en utilisant les technologies modernes React.js pour le frontend
                        et Node.js pour le backend. Ce projet vise à offrir une interface fluide, rapide et responsive tout en intégrant
                        un CMS moderne pour permettre une gestion simplifiée des produits, commandes et contenus du site.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Objectifs du projet :</h3>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>✅ Modernisation de l’interface utilisateur avec React.js et une architecture component-based.</li>
                        <li>✅ Optimisation des performances grâce à un backend en Node.js avec Express.js.</li>
                        <li>✅ Intégration d’un CMS moderne (Strapi, Sanity ou autre) pour faciliter la gestion du contenu et des produits.</li>
                        <li>✅ Amélioration du SEO et du temps de chargement pour une meilleure visibilité et une navigation plus fluide.</li>
                        <li>✅ Gestion des paiements sécurisés via des solutions comme Stripe ou PayPal.</li>
                        <li>✅ Mise en place d’une API REST ou GraphQL pour une meilleure scalabilité et interopérabilité.</li>
                        <li>✅ Expérience utilisateur améliorée avec des animations fluides et une interface intuitive.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies utilisées :</h3>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>🔹 <strong>Frontend</strong> : React.js, Next.js (si nécessaire), Tailwind CSS / Material UI</li>
                        <li>🔹 <strong>Backend</strong> : Node.js, Express.js</li>
                        <li>🔹 <strong>CMS</strong> : Strapi, Sanity ou Contentful</li>
                        <li>🔹 <strong>Base de données</strong> : MongoDB / PostgreSQL</li>
                        <li>🔹 <strong>Authentification</strong> : JWT, OAuth</li>
                        <li>🔹 <strong>Paiements</strong> : Stripe, PayPal</li>
                        <li>🔹 <strong>Déploiement</strong> : Vercel, AWS, DigitalOcean</li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm text-gray-700">
                        Ce projet permettra de proposer une plateforme robuste, évolutive et facilement administrable,
                        offrant une meilleure expérience aux utilisateurs et une gestion efficace pour l’équipe de vente.
                    </p>
                </div>

                <div className="text-right">
                    <button onClick={handleSubmaitOffer}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
                        aria-label="Soumettre une offre"
                    >
                        <i className="fas fa-paper-plane" aria-hidden="true"></i> Soumettre une offre
                    </button>
                </div>

            </div>
        </div>
    )
}
