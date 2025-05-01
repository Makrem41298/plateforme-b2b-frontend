import axiosInstanceEnterprise from "../axiosInstanceEnterprise.js";

export const verifyEmailApi =  {
    resendEmailVerifyEnterprise:()=>axiosInstanceEnterprise.post('enterprise/email/resend')
}