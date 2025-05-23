import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {clientApi, entrepriseApi} from "../services/api.js";

const handleApiError = (error, rejectWithValue) => {
    console.error("rejected",error);
    return rejectWithValue(error.response?.data || error.message);
};

export const getConversationClient = createAsyncThunk(
    'client/getConversation',
    async ({receiverId,receiverType}, { rejectWithValue }) => {
        try {
            const response = await clientApi.getConversation(receiverId, receiverType);
            return response?.data || []
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);
export const sendMessage = createAsyncThunk(
    'client/sendMessage',
    async (data, { rejectWithValue }) => {

        try {
            const response = await clientApi.sendMessage(data);
            return response?.data || []
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
)
export const getConversationEntreprise = createAsyncThunk(
    'enterprise/getConversation',
    async ({receiverId,receiverType}, { rejectWithValue }) => {
        try {
            const response = await entrepriseApi.getConversation(receiverId, receiverType);
            return response?.data || []
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
);
export const sendMessageEntreprise = createAsyncThunk(
    'enterprise/sendMessage',
    async (data, { rejectWithValue }) => {

        try {
            const response = await entrepriseApi.sendMessage(data);
            return response?.data || []
        } catch (error) {
            return handleApiError(error, rejectWithValue);
        }
    }
)

const messageSlice = createSlice({
    name: 'offers',
    initialState: {
        items: [],
        status: 'idle',
        statusSend:'idle',


        error: null,
    },
    reducers: {
        clearMessageStatus: (state) => {
            state.status = 'idle';
            state.error = null;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getConversationClient.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getConversationClient.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getConversationClient.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(sendMessage.pending, (state) => {
                state.statusSend = 'loading';
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.statusSend = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.statusSend = 'failed';
                state.error = action.payload;
            })



            .addCase(getConversationEntreprise.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getConversationEntreprise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getConversationEntreprise.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(sendMessageEntreprise.pending, (state) => {
                state.statusSend = 'loading';
                state.error = null;
            })
            .addCase(sendMessageEntreprise.fulfilled, (state, action) => {
                state.statusSend = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(sendMessageEntreprise.rejected, (state, action) => {
                state.statusSend = 'failed';
                state.error = action.payload;
            })


    }
});
export default messageSlice.reducer;