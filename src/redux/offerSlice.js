// src/redux/offers/offersClientSlice.js
import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {clientApi, entrepriseApi} from "../services/api.js";

// Async thunks for offers CRUD operations
export const getAllOffersEnterprise = createAsyncThunk(
    'enterprise/getOffers',
    async (params, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.getOffres(params);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
export const getProjectOffersClient = createAsyncThunk(
    'client/project/getOffers',
    async ({slug,params}, { rejectWithValue }) => {
        try {

            const response = await clientApi.getOfferProject(slug, params);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getOfferEnterprise = createAsyncThunk(
    'enterprise/getOffer',
    async (id, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.getOffre(id);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const createOffer = createAsyncThunk(
    'enterprise/createOffer',
    async (data, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.createOffre(data);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const updateOffer = createAsyncThunk(
    'enterprise/updateOffer',
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.updateOffre(id, data);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
export const updateOfferClient = createAsyncThunk(
    'client/updateOffer',
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const response = await clientApi.updateOffre(id, data);
            return response.data;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const deleteOffer = createAsyncThunk(
    'enterprise/deleteOffer',
    async (id, { rejectWithValue }) => {
        try {
            await entrepriseApi.deleteOffre(id);
            return id;
        } catch (error) {
            console.error("rejected", error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const offersSlice = createSlice({
    name: 'offers',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearOfferStatus: (state) => {
            state.status = 'idle';
            state.error = null;
        }
    },

    extraReducers: (builder) => {
        builder
            // Fetch project offers for client
            .addCase(getProjectOffersClient.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProjectOffersClient.fulfilled, (state, action) => {

                state.status = 'succeeded';
                state.items = action.payload;

            })
            .addCase(getProjectOffersClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Fetch all offers for enterprise
            .addCase(getAllOffersEnterprise.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllOffersEnterprise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getAllOffersEnterprise.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Fetch single offer
            .addCase(getOfferEnterprise.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getOfferEnterprise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = [action.payload];
            })
            .addCase(getOfferEnterprise.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Create offer
            .addCase(createOffer.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createOffer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(createOffer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Update offer
            .addCase(updateOffer.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateOffer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex(offer => offer.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateOffer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            .addCase(deleteOffer.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteOffer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(current(state).items)
                state.items.data = state.items.data.filter(
                    offer => offer.id !==action.payload
                );
                state.items.total -= 1;
                state.items.to -= 1;
                if (state.items.to === 0) {
                    state.items.from=0

                }
            })
            .addCase(deleteOffer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(updateOfferClient.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateOfferClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex(offer => offer.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateOfferClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

    }
});

export const { clearOfferStatus } = offersSlice.actions;
export default offersSlice.reducer;

