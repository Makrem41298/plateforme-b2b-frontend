import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes,Outlet } from 'react-router-dom';
import { Layouts } from "../layouts/layouts.jsx";

// Pages
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import ListProjectEntreprise from "../pages/project/ListProjectEntreprise.jsx";
import TabContract from "../pages/contract/TabContract.jsx";
import TabInBox from "../pages/inbox/TabInBox.tsx";
import TabOffer from "../pages/offer/TabOffer.jsx";
import { TabTransaction } from "../pages/transaction/TabTransaction.jsx";
import { Withdraw } from "../pages/Withdraw/Withdraw.jsx";
import { DescriptionProject } from "../pages/project/DescriptionProject.jsx";
import { CreateOffer } from "../pages/offer/CreateOffer.jsx";
import Conversation from "../pages/inbox/Conversation.jsx";
import CreationProject from "../pages/project/CreationProject.jsx";
import CreationContract from "../pages/contract/CreationContract.jsx";
import ListProjectClient from "../pages/project/ListProjectClient.jsx";
import EditProfilEntroprise from "../pages/Profile/EditProfilEntroprise.jsx";
import SettingsPage from "../pages/Setting/SettingsPage.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

// Auth
import SelectUser from "../Auth/SelectUser.jsx";
import LoginEntreprise from "../Auth/Enterprise/LoginEntreprise.jsx";
import LoginClient from "../Auth/Client/LoginClient.jsx";
import CreateAccountEnterprise from "../Auth/Enterprise/CreateAccountEnterprise.jsx";
import CreateAccountClient from "../Auth/Client/CreateAccountClient.jsx";
import ForgetPasswordEnterprise from "../Auth/Enterprise/ForgetPasswordEnterprise.jsx";
import ForgetPasswordClient from "../Auth/Client/ForgetPasswordClient.jsx";
import VerificationEmailClient from "../Auth/Client/VerificationEmailClient.jsx";

// Context
import { AuthEnterpriseContext } from "../services/AuthEnterpriseContext.jsx";
import { AuthClientContext } from "../services/AuthClientContext.jsx";

// Routes
import { routes } from "./routesName.js";
import LinkVerifedEmail from "../Auth/LinkVerifedEmail.jsx";
import RouteProtectClient from "./RouteProtectClient.jsx";
import VerificationEmailEnterprise from "../Auth/Enterprise/VerificationEmailEnterprise.jsx";
import RouteProtectEnterprise from "./RouteProtectEnterprise.jsx";

export const AppRoutes = () => {
    let {tokenEnterprise}= useContext(AuthEnterpriseContext);
    let {tokenClient}= useContext(AuthClientContext);



    return (
        <BrowserRouter>
            <Routes>

                <Route element={<RouteProtectEnterprise/>} >
                    <Route path="/" element={<Layouts authType="Enterprise" />}>
                        <Route path={routes.entreprise.dashboard} element={<Dashboard />} />
                        <Route path={routes.entreprise.projects} element={<ListProjectEntreprise />} />
                        <Route path={routes.entreprise.contract} element={<TabContract />} />
                        <Route path={routes.entreprise.inbox} element={<TabInBox />} />
                        <Route path={routes.entreprise.offer} element={<TabOffer />} />
                        <Route path={routes.entreprise.transaction} element={<TabTransaction />} />
                        <Route path={routes.entreprise.withdraw} element={<Withdraw />} />
                        <Route path={routes.entreprise.projectDescription} element={<DescriptionProject />} />
                        <Route path={routes.entreprise.createOffer} element={<CreateOffer />} />
                        <Route path={routes.entreprise.conversation} element={<Conversation />} />
                        <Route path={routes.entreprise.createContract} element={<CreationContract />} />
                        <Route path={routes.entreprise.profile} element={<EditProfilEntroprise />} />
                        <Route path={routes.entreprise.settings} element={<SettingsPage />} />
                        <Route path={routes.verificationEmailEnterprise.path} element={<VerificationEmailEnterprise />} />
                    </Route>
                </Route>
                <Route element={!tokenEnterprise?<Outlet/>:<Navigate to={routes.entreprise.dashboard} replace />}>
                    <Route path={routes.loginEnterprise.path} element={<LoginEntreprise />}  />
                    <Route path={routes.createAccountEnterprise.path} element={<CreateAccountEnterprise />} />
                    <Route path={routes.forgetPasswordEnterprise.path} element={<ForgetPasswordEnterprise />} />

                </Route>


                <Route element={<RouteProtectClient/>} >
                    <Route path="/" element={ <Layouts authType="Client" />}>
                        <Route path={routes.client.dashboard} element={<Dashboard />} />
                        <Route path={routes.client.mesProjects} element={<ListProjectClient />} />
                        <Route path={routes.client.contract} element={<TabContract />} />
                        <Route path={routes.client.inbox} element={<TabInBox />} />
                        <Route path={routes.client.offer} element={<TabOffer />} />
                        <Route path={routes.client.transaction} element={<TabTransaction />} />
                        <Route path={routes.client.projectDescription} element={<DescriptionProject />} />
                        <Route path={routes.client.conversation} element={<Conversation />} />
                        <Route path={routes.client.createProject} element={<CreationProject />} />
                        <Route path={routes.client.profile} element={<EditProfilEntroprise />} />
                        <Route path={routes.client.settings} element={<SettingsPage />} />
                        <Route path={routes.verificationEmailClient.path} element={<VerificationEmailClient />} />

                    </Route>
                </Route>
                <Route element={!tokenClient?<Outlet/>:<Navigate to={routes.client.dashboard} />} >
                    <Route path={routes.loginClient.path} element={ <LoginClient />} />
                    <Route path={routes.createAccountClient.path} element={<CreateAccountClient />} />
                    <Route path={routes.forgetPasswordClient.path} element={<ForgetPasswordClient />} />
                </Route>

                <Route path={routes.selectUser.path} element={<SelectUser />} />
                <Route path={routes.client.verificationClientLink} element={<LinkVerifedEmail/>}/>
                <Route path={routes.notFound.path} element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
