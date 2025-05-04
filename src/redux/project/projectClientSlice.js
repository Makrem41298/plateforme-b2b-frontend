import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientApi } from "../../services/api.js";

// Helper function to handle API errors
const handleApiError = (error, rejectWithValue) => {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
};

export const getProjectsClient = createAsyncThunk(
    'client/getProjects',
    async (params, { rejectWithValue }) => {
        try {
            const response = await clientApi.getProjets(params);
            console.log("test");
            return response.data;
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);

export const getProjectClient = createAsyncThunk(
    'client/getProject',
    async (slug, { rejectWithValue }) => {
        try {
            const response = await clientApi.getProjet(slug);
            return response.data;
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);

export const createProjet = createAsyncThunk(
    'client/createProject',
    async (data, { rejectWithValue }) => {
        try {
            const response = await clientApi.createProjet(data);
            return response.data;
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);

export const updateProject = createAsyncThunk(
    'client/updateProject',
    async ({ slug, data }, { rejectWithValue }) => {
        try {
            const response = await clientApi.updateProjet(slug, data);
            return response.data;
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);

export const deleteProject = createAsyncThunk(
    'client/deleteProject',
    async (slug, { rejectWithValue }) => {
        try {
            const response = await clientApi.deleteProjet(slug);
            return response.data;
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearProjectsError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Get All Projects
            .addCase(getProjectsClient.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProjectsClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getProjectsClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Get Single Project
            .addCase(getProjectClient.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProjectClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const existingIndex = state.items.findIndex(p => p.slug === action.payload.slug);
                if (existingIndex === -1) {
                    state.items.push(action.payload);
                } else {
                    state.items[existingIndex] = action.payload;
                }
            })
            .addCase(getProjectClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Create Project
            .addCase(createProjet.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createProjet.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(createProjet.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Update Project
            .addCase(updateProject.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateProject.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex(project => project.slug === action.payload.slug);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateProject.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Delete Project
            .addCase(deleteProject.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = state.items.filter(project => project.slug !== action.payload.slug);
            })
            .addCase(deleteProject.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { clearProjectsError } = projectSlice.actions;
export default projectSlice.reducer;