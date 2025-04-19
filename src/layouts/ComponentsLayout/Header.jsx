import React from 'react'
import HamburgerBtn from "../../components/Responsive/HamburgerBtn.jsx";
import UserProfile from "../../components/UserProfile.jsx";
import NotificationMenu from "../../components/NotificationMenu.jsx";
import Search from "../../components/Search.jsx";

export const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-3 bg-white shadow-sm gap-4 md:gap-0 headerSide">

            <div className="w-full md:w-1/3 flex-shrink-0 inputSide">
                <Search />
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto md:justify-normal">
                <HamburgerBtn/>

                <NotificationMenu />

                <UserProfile/>
            </div>




        </div>
    )
}