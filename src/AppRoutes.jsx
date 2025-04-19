import React from 'react'
import {Layouts} from "./layouts/layouts.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import ListProjectEntreprise from "./pages/project/ListProjectEntreprise.jsx";
import TabContract from "./pages/contract/TabContract.jsx";
import TabInBox from "./pages/inbox/TabInBox.js";
import TabOffer from "./pages/offer/TabOffer.jsx";
import {TabTransaction} from "./pages/transaction/TabTransaction.jsx";
import {Withdraw} from "./pages/Withdraw/Withdraw.jsx";
import {DescriptionProject} from "./pages/project/DescriptionProject.jsx";
import {CreateOffer} from "./pages/offer/CreateOffer.jsx";
import Conversation from "./pages/inbox/Conversation.jsx";
import CreationProject from "./pages/project/CreationProject.jsx";
import CreationContract from "./pages/contract/CreationContract.jsx";
import ListProjectClient from "./pages/project/ListProjectClient.jsx";
import EditProfilEntroprise from "./pages/Profile/EditProfilEntroprise.jsx";
import SelectUser from "./Auth/SelectUser.jsx";
import LoginEntreprise from "./Auth/Enterprise/LoginEntreprise.jsx";
import LoginClient from "./Auth/Client/LoginClient.jsx";
import CreateAccountEnterprise from "./Auth/Enterprise/CreateAccountEnterprise.jsx";
import CreateAccountClient from "./Auth/Client/CreateAccountClient.jsx";
import LoginEnterprise from "./Auth/Enterprise/LoginEntreprise.jsx";
import ForgetPassword from "./Auth/Enterprise/ForgetPasswordEnterprise.jsx";
import ForgetPasswordEnterprise from "./Auth/Enterprise/ForgetPasswordEnterprise.jsx";
import ForgetPasswordClient from "./Auth/Client/ForgetPasswordClient.jsx";
import Setting from "./pages/Setting/SettingsPage.jsx";
import SettingsPage from "./pages/Setting/SettingsPage.jsx";
import VerificationEmail from "./Auth/VerificationEmail.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layouts />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="projects" element={<ListProjectEntreprise />} />
                    <Route path="contract" element={<TabContract />} />
                    <Route path="inbox" element={<TabInBox />} />
                    <Route path="offer" element={<TabOffer />} />
                    <Route path="transaction" element={<TabTransaction />} />
                    <Route path="withdraw" element={<Withdraw />} />
                    <Route path="projects/description-project" element={<DescriptionProject />} />
                    <Route path="mes-projects" element={<ListProjectClient/>} />

                    <Route path="offer/Create-offer" element={<CreateOffer/>} />
                    <Route path="inbox/Conversation" element={<Conversation />} />
                    <Route path="project/creation" element={<CreationProject/>} />
                    <Route path="/contract/creation" element={<CreationContract/>} />
                    <Route path="my-profile" element={<EditProfilEntroprise/>} />
                    <Route path="settings" element={<SettingsPage/>}/>

                </Route>
            <Route path="select-user" element={<SelectUser/>} />
                <Route path="/login/entreprise" element={<LoginEnterprise/>} />
                <Route path="/login/client" element={<LoginClient/>} />
                <Route path="/entreprise/creation-account" element={<CreateAccountEnterprise/>} />
                <Route path="client/creation-account" element={<CreateAccountClient/>} />
                <Route path="/entreprise/forget-password" element={<ForgetPasswordEnterprise/>} />
                <Route path="/client/forget-password" element={<ForgetPasswordClient/>} />
                <Route path="/verification-email" element={<VerificationEmail/>} />
                <Route path="*" element={<PageNotFound/>} />






            </Routes>
        </BrowserRouter>
    )
}
