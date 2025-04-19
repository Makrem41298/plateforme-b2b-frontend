import React from 'react'
import HamburgerBtn from "../../components/Responsive/HamburgerBtn.jsx";
import {NavLink} from "react-router-dom";

export const SideBar = () => {
    const menuEntreprise = [
        { name: 'Dashboard', icon: 'fas fa-columns w-5 mr-3', link: 'dashboard' },
        { name: 'Projets', icon: 'fas fa-clipboard-list w-5 mr-3', link: 'projects' },
        { name: 'Contrats', icon: 'fas fa-briefcase w-5 mr-3', link: 'contract' },
        { name: 'Inbox', icon: 'far fa-comment-dots w-5 mr-3', link: 'inbox' },
        { name: 'Mes Offres', icon: 'fas fa-bullhorn w-5 mr-3', link: 'offer' },
        { name: 'Transactions', icon: 'fas fa-receipt w-5 mr-3', link: 'transaction' },
        { name: 'Retrait', icon: 'fas fa-money-bill-transfer w-5 mr-3', link: 'withdraw' }
    ];
    const menuClient=[
        { name: 'Dashboard', icon: 'fas fa-columns w-5 mr-3', link: 'dashboard' },
        { name: ' MesProjets', icon: 'fas fa-clipboard-list w-5 mr-3', link:  'mes-projects' },
        { name: 'Inbox', icon: 'far fa-comment-dots w-5 mr-3', link:  'inbox' },
        { name: 'Transactions', icon: 'fas fa-receipt w-5 mr-3', link:  'transaction' },

    ]
    const auth='clientd'
    const nav = auth === 'client' ?[...menuClient] :[...menuEntreprise]  ;
    console.log(nav);



    return (
        <div className="w-full md:w-60 bg-white border-r flex flex-col justify-between sideBar">
            <div>
                <div className="px-6 py-4 text-xl font-bold">
                    <span className="text-blue-500">Dash</span><span className="text-black">Stack</span>
                </div>

                <nav className="mt-6 flex flex-col gap-1 text-sm">
                    {nav.map((item, index) => (
                        <NavLink to={item.link} key={index}
                                 className="flex items-center px-6 py-2 hover:bg-gray-100 text-gray-800">
                            <i className={item.icon}></i>{item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className="border-t mt-4 pt-4 px-6 flex flex-col gap-3 pb-6 text-sm">

                <a href="#" className="flex items-center hover:text-green-500">
                    <i className="fas fa-life-ring w-5 mr-3"></i>Help Center
                </a>
            </div>
        </div>


    )
}
