import { configureStore } from "@reduxjs/toolkit";
import emailVerificationReducer from "./resendEmailVerifyClientSlice.js";
import emailVerificationEnterpriseReducer from "./verificationEmail/resendVerifyEnterpriseSlice.js";
import  projectReduce from "./project/projectClientSlice.js";

export const store = configureStore({
    reducer: {
        emailVerification: emailVerificationReducer,
        emailVerificationEnterprise: emailVerificationEnterpriseReducer,
        projects: projectReduce
    },

});