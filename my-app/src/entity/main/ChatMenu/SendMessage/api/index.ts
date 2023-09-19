import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {sendMessageRequest} from "../../../../../shared/api/ChatMenu/SendMessage/interface";
import {sendMessage} from "../../../../../shared/api/ChatMenu/SendMessage";

interface IState {
    data: string | undefined
    isLoading: boolean
    errorMessage: string | undefined
}

const initialState: IState = {
    data: undefined,
    isLoading: false,
    errorMessage: undefined
}
export const sendMessageAction = createAsyncThunk<string, sendMessageRequest>(
    "sendMessage",
    async (body) => {
        const response = await sendMessage(body)
        return response.data
    }
)

const sendMessageSlice = createSlice({
    name: 'sendMessage',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMessageAction.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.errorMessage = undefined
            })
            .addCase(sendMessageAction.pending, (state, action) => {
                state.data = undefined
                state.isLoading = true
                state.errorMessage = undefined
            })
            .addCase(sendMessageAction.rejected, (state, action) => {
                state.data = undefined
                state.isLoading = false
                state.errorMessage = action.error.message
            })
    }
})

export default sendMessageSlice
