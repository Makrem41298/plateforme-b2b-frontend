import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { entrepriseApi } from "../services/api.js";

const handleApiError = (error, rejectWithValue) => {
    console.error("API error:", error);
    return rejectWithValue(error.response?.data || error.message);
};

export const fetchEnterpriseProjects = createAsyncThunk(
    "projects/fetchAll",
    async (params, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.getProjets(params);
            return response.data;
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);

export const fetchProjectBySlug = createAsyncThunk(
    "projects/fetchBySlug",
    async (slug, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.getProjet(slug);
            return response.data;
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);

const projectsEnterpriseSlice = createSlice({
    name: "projects",
    initialState: {
        items: [],
        status: "idle",   // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        clearProjectStatus(state) {
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all projects
            .addCase(fetchEnterpriseProjects.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchEnterpriseProjects.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchEnterpriseProjects.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Fetch single project
            .addCase(fetchProjectBySlug.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProjectBySlug.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = [action.payload];
            })
            .addCase(fetchProjectBySlug.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { clearProjectStatus } = projectsEnterpriseSlice.actions;
export default projectsEnterpriseSlice.reducer;
