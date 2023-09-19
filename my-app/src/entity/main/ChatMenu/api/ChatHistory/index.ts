import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {chatHistoryRequest} from "../../../../../shared/api/ChatMenu/ChatHistory/interface";
import {getChatHistory} from "../../../../../shared/api/ChatMenu/ChatHistory";
import {IChatMessage} from "../../../../../shared/api/commonInterface";

interface IState {
    data: IChatMessage[] | undefined,
    isLoading: boolean,
    errorMessage: string | undefined
}

const initialState: IState = {
    data: undefined,
    isLoading: false,
    errorMessage: undefined
}

export const getChatHistoryAction = createAsyncThunk<IChatMessage[], chatHistoryRequest>(
    "getChatHistory",
    async (body) => {
        const response = await getChatHistory(body)
        return response.data
    }
)

const getChatHistorySlice = createSlice({
    name: 'getChatHistory',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChatHistoryAction.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
                state.errorMessage = undefined
            })
            .addCase(getChatHistoryAction.pending, (state) => {
                state.data = undefined
                state.isLoading = true
                state.errorMessage = undefined
            })
            .addCase(getChatHistoryAction.rejected, (state, action) => {
                state.data = undefined
                state.isLoading = false
                state.errorMessage = action.error.message
            })
    }
})

export default getChatHistorySlice
