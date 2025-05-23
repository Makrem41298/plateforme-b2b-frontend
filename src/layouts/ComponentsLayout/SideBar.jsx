import React from 'react'
import {NavLink} from "react-router-dom";
import {sideBar} from '/src/data.js'

export const SideBar = ({authType}) => {



    const nav = authType === 'Client' ?[...sideBar.menuClient] :(
        authType === 'Enterprise' ?[...sideBar.menuEnterprise]:[...sideBar.menuEnterprise])




    return (
        <div className="w-full md:w-60 bg-white border-r flex flex-col justify-between sideBar">
            <div>
                <div className="px-6 py-4 text-xl font-bold">
                    <span className="text-blue-500">Pro</span><span className="text-black">Linker</span>
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
