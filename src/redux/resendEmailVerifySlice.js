import axiosInstanceClient from "../services/axiosInstanceClient.js";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from "sweetalert2";

export const resendEmailVerify = createAsyncThunk(
    'auth/resendEmailVerify',
    async () => {
        try {
            const response = await axiosInstanceClient.post('/email/resend');
            return response.data;
        } catch (error) {
          console.error(error);
        }
    }
);

const emailVerificationSlice = createSlice({
    name: "emailVerification",
    initialState: {
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
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
            .addCase(resendEmailVerify.pending, (state) => {
                state.status = 'loading';
                state.error = null;

            })
            .addCase(resendEmailVerify.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = action.payload;
            })
            .addCase(resendEmailVerify.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }});

export default emailVerificationSlice.reducer;