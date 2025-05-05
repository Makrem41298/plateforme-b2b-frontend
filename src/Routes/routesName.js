// routes.js
export const routes = {
    // Public routes
    loginEnterprise: { path: "/login/entreprise", name: "loginEnterprise" },
    createAccountEnterprise: { path: "/entreprise/creation-account", name: "createAccountEnterprise" },
    forgetPasswordEnterprise: { path: "/entreprise/forget-password", name: "forgetPasswordEnterprise" },
    loginClient: { path: "/login/client", name: "loginClient" },
    createAccountClient: { path: "/client/creation-account", name: "createAccountClient" },
    forgetPasswordClient: { path: "/client/forget-password", name: "forgetPasswordClient" },
    verificationEmailClient: { path: "client/verification-email", name: "verificationEmailClient" },
    verificationEmailEnterprise: { path: "/enterprise/verification-email", name: "verificationEmailEnterprise" },

    selectUser: { path: "/select-user", name: "selectUser" },
    notFound: { path: "*", name: "notFound" },

    // Entreprise routes
    entreprise: {
        dashboard: "/entreprise/dashboard",
        projects: "entreprise/projects",
        projectDescription: "entreprise/projects/description-project",
        createOffer: "entreprise/offer/Create-offer",
        contract: "entreprise/contract",
        createContract: "entreprise/contract/creation",
        inbox: "entreprise/inbox",
        conversation: "entreprise/inbox/Conversation",
        offer: "entreprise/offer",
        transaction: "entreprise/transaction",
        withdraw: "entreprise/withdraw",
        profile: "entreprise/my-profile",
        settings: "entreprise/settings",
        verificationEnterprisePage: "/entreprise/verification-email",

        verificationClientLink: "entreprise/verify-email",

    },

    // Client routes
    client: {
        dashboard: "/client/dashboard",
        mesProjects: "/client/mes-projects",
        projectDescription: "projects/description-project",
        contract: "client/contract",
        inbox: "client/inbox",
        conversation: "client/inbox/Conversation",
        offer: "client/offer",
        transaction: "client/transaction",
        createProject: "/client/project/creation",
        profile: "client/my-profile",
        settings: "client/settings",
        verificationClientPage: "/client/verification-email",

        verificationClientLink: "verify-email",
    }
};
