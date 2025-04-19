import React from 'react'
import {Header} from "./ComponentsLayout/Header.jsx";
import {SideBar} from "./ComponentsLayout/SideBar.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import {Outlet} from "react-router-dom";
import HamburgerBtn from "../components/Responsive/HamburgerBtn.jsx";

export const Layouts = () => {
    return (
        <div className="bg-gray-100">
            <div className="min-h-screen flex flex-col md:flex-row containerSide" >
                <SideBar></SideBar>

                <div className="flex-1 overflow-x-hidden headPart">
                    <Header>
                    </Header>
                    <main className="flex-1 overflow-y-auto">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>


    )
}
