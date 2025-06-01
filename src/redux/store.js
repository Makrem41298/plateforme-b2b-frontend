import { configureStore } from "@reduxjs/toolkit";
import emailVerificationReducer from "./resendEmailVerifyClientSlice.js";
import emailVerificationEnterpriseReducer from "./resendVerifyEnterpriseSlice.js";
import  projectReduce from "./projectClientSlice.js";
import offersReducer from "./offerSlice.js";
import messageReducer from "./messageSlice.js";
import projectsEnterpriseReducer from "./projectEnterpriseSlice.js";
import contractsReducer from "./contractSlice.js";

export const store = configureStore({
    reducer: {
        emailVerification: emailVerificationReducer,
        emailVerificationEnterprise: emailVerificationEnterpriseReducer,
        projects: projectReduce,
        offers: offersReducer,
        messages: messageReducer,
        projectEnterprise: projectsEnterpriseReducer,
        contracts: contractsReducer
    },

});
