import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectEnterprise } from '../../hooks/useReduxHooks.js';
import Swal from 'sweetalert2';
import Loader from '../../components/Loader.jsx';
import webImage from '../../assets/images/projects/web.png';
import mobileImage from '../../assets/images/projects/mobile.png';
import designImage from '../../assets/images/projects/design.png';
import marketingImage from '../../assets/images/projects/marketing.png';
import writingImage from '../../assets/images/projects/writing.png';
import businessImage from '../../assets/images/projects/business.png';
import aiImage from '../../assets/images/projects/ia.png';
import defaultImage from '../../assets/images/projects/default.png';
import {routes} from "../../Routes/routesName.js";
function ListProjectEntreprise() {
    const navigate = useNavigate();

        const projectImages = {
            developpement_web: webImage,
            developpement_mobile: mobileImage,
            design_graphique: designImage,
            marketing_digital: marketingImage,
            redaction_de_contenu: writingImage,
            conseil_en_affaires: businessImage,
            intelligence_artificielle: aiImage,
            autre: defaultImage,
        };

        const getProjectImage = (type) => {
            return projectImages[type] || defaultImage;
        };
    const {
        projects,                    // full pagination object
        status,
        error,
        getProjects,       // dispatch(fetchEnterpriseProjects)
    } = useProjectEnterprise();

    // Fetch page on mount (or when params change)
    useEffect(() => {
        const load = async () => {
            try {
                await getProjects({per_page:12}).unwrap();
            } catch (e) {
                console.error(e);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.message || 'Failed to load projects',
                });
            }
        };
        load();
    }, []);

    // Log when we succeed
    useEffect(() => {
        if (status === 'succeeded') {
            console.log('Fetched projects:', projects);
        }
    }, [status, projects]);

    if (status === 'loading') return <Loader />;
    if (status === 'failed')  return <p className="text-red-600">Error: {error}</p>;

    const items = Array.isArray(projects.data) ? projects.data : [];

    const handelFilter=async (event) => {
        const mapping = {
            'Tous les domaines':'',
            'Développement web': 'developpement_web',
            'Développement mobile': 'developpement_mobile',
            'Design graphique': 'design_graphique',
            'Marketing digital': 'marketing_digital',
            'Rédaction de contenu': 'redaction_de_contenu',
            'Conseil en affaires': 'conseil_en_affaires',
            'Intelligence artificielle': 'intelligence_artificielle',
            'Autre': 'autre'
        };
        if (mapping[event]==='')
            getProjects({per_page:12});
        else
            getProjects({type: mapping[event]});


    }


    return (
        <div className="bg-gray p-8 font-sans text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6">Projets</h1>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
                {[

                        { emoji: '🗂️', label: 'Tous les domaines' },
                        { emoji: '🌐', label: 'Développement web' },
                        { emoji: '📱', label: 'Développement mobile' },
                        { emoji: '🎨', label: 'Design graphique' },
                        { emoji: '📣', label: 'Marketing digital' },
                        { emoji: '✍️', label: 'Rédaction de contenu' },
                        { emoji: '💼', label: 'Conseil en affaires' },
                        { emoji: '🤖', label: 'Intelligence artificielle' },
                        { emoji: '🔧', label: 'Autre' }


                ].map((f) => (
                    <button
                        onClick={() => handelFilter(f.label)}
                        key={f.label}
                        className="flex items-center gap-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition"
                    >
                        {f.emoji} {f.label}
                    </button>
                ))}

            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.length === 0 ? (
                    <p>No projects found.</p>
                ) : (
                    items.map((proj) => (
                        <div
                            key={proj.id}
                            onClick={() => {
                                navigate(`${routes.entreprise.projectDescription}/${proj.slug}`);
                            }}
                            className="bg-white border rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer"
                        >
                            <div className="relative" >
                                <img
                                    src={getProjectImage(proj.type)}
                                    alt={proj.type}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-white rounded-tl-lg px-2 py-1 shadow text-sm">
                                    📄
                                </div>
                            </div>
                            <div className="p-4">
                                <h2 className="text-sm font-bold mb-1">{proj.titre}</h2>
                                <p className="text-xs text-gray-500 mb-3">
                                    {proj.description.slice(0, 60)}…
                                </p>
                                <p className="text-sm font-semibold text-gray-700">
                                    Prix estimé&nbsp;: <span className="text-green-600">{proj.budget} €</span>
                                </p>
                            </div>
                            <div className="px-4 pb-4">
                                <div className="w-full h-2 bg-blue-100 rounded-full mt-3" />
                            </div>
                        </div>
                    ))
                )}

            </div>

            {/* Pagination */}

                <div className="flex justify-center items-center gap-2 mt-10 text-sm mb-20">
                    <button
                        onClick={() =>
                            projects.prev_page_url &&
                            getProjects({ page: projects.current_page - 1,per_page:12 }).unwrap()
                        }
                        disabled={!projects.prev_page_url}
                        className="px-4 py-2 border rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50"
                    >
                        ‹ précédent
                    </button>

                    {Array.from({ length: projects.last_page }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => getProjects({ page: i + 1,per_page:12 }).unwrap()}
                            className={`px-4 py-2 border rounded-md ${
                                projects.current_page === i + 1
                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                    : 'hover:bg-gray-100 text-gray-600'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() =>
                            projects.next_page_url &&
                            getProjects({ page: projects.current_page + 1 }).unwrap()
                        }
                        disabled={!projects.next_page_url}
                        className="px-4 py-2 border rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50"
                    >
                        suivant ›
                    </button>
                </div>

        </div>
    );
}

export default ListProjectEntreprise;
