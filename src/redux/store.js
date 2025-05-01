import { configureStore } from "@reduxjs/toolkit";
import emailVerificationReducer from "./resendEmailVerifySlice.js";
import emailVerificationEnterpriseReducer from "./verificationEmail/resendVerifyEnterpriseSlice.js";

export const store = configureStore({
    reducer: {
        emailVerification: emailVerificationReducer,
        emailVerificationEnterprise: emailVerificationEnterpriseReducer,
    },

});