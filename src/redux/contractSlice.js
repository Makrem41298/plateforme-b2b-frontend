// src/redux/contractSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientApi, entrepriseApi } from "../services/api.js";

// Async thunks for contract CRUD operations
export const getAllContractsEnterprise = createAsyncThunk(
    'enterprise/getContracts',
    async (params, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.getContrats(params);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getContractEnterprise = createAsyncThunk(
    'enterprise/getContract',
    async (reference, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.getContrat(reference);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const createContract = createAsyncThunk(
    'enterprise/createContract',
    async (data, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.createContrat(data);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const updateContract = createAsyncThunk(
    'enterprise/updateContract',
    async ({ reference, data }, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.updateContrat(reference, data);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);




export const getAllContractsClient = createAsyncThunk(
    'client/getContracts',
    async (params, { rejectWithValue }) => {
        try {
            const response = await clientApi.getContrats(params);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getContractClient = createAsyncThunk(
    'client/getContract',
    async (reference, { rejectWithValue }) => {
        try {
            const response = await clientApi.getContrat(reference);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const updateContractClient = createAsyncThunk(
    'client/updateContract',
    async ({ reference, data }, { rejectWithValue }) => {
        try {
            const response = await clientApi.updateContrat(reference, data);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const contractsSlice = createSlice({
    name: 'contracts',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearContractStatus: (state) => {
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch all contracts for enterprise
            .addCase(getAllContractsEnterprise.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllContractsEnterprise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getAllContractsEnterprise.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Fetch single contract
            .addCase(getContractEnterprise.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getContractEnterprise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = [action.payload];
            })
            .addCase(getContractEnterprise.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Create contract
            .addCase(createContract.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createContract.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(createContract.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Update contract
            .addCase(updateContract.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateContract.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex(contract => contract.reference === action.payload.reference);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateContract.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })






            .addCase(getAllContractsClient.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
            .addCase(getAllContractsClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getAllContractsClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            .addCase(getContractClient.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getContractClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = [action.payload];
            })
            .addCase(getContractClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(updateContractClient.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateContractClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex(contract => contract.reference === action.payload.reference);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateContractClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
});

export const { clearContractStatus } = contractsSlice.actions;
export default contractsSlice.reducer;