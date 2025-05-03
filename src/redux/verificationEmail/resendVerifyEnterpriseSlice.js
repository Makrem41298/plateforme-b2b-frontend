import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {entrepriseApi} from "../../services/api.js";

export const resendVerifyEnterprise = createAsyncThunk(
    'enterprise/resendEmailVerify',
    async ()=>{
        try {
            const response= await entrepriseApi.resendEmailVerifyEnterprise()
                return response;
        }catch(error){
            console.error(error);
        }

})
const emailVerificationEnterpriseSlice = createSlice({
    name: "emailVerification",
    initialState: {
        status: 'idle',
        error: null,
        lastResendTimestamp: null,
        attemptsCount: 0

    },
    reducers: {
        resetVerificationState: (state) => {
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(resendVerifyEnterprise.pending, (state) => {
                state.status = 'loading';
                state.error = null;

            })
            .addCase(resendVerifyEnterprise.fulfilled, (state, action) => {

                state.status = 'succeeded';
                state.error = action.payload;
                state.error = null;

            })
            .addCase(resendVerifyEnterprise.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }});

export default emailVerificationEnterpriseSlice.reducer;