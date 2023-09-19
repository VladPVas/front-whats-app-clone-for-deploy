import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {contactLastMessageRequest} from "../../../../../shared/api/ChatSider/Contact/interface";
import {getContactLastMessage} from "../../../../../shared/api/ChatSider/Contact";
import {IChatMessage} from "../../../../../shared/api/commonInterface";

interface IState {
    data: IChatMessage[] | undefined;
    isLoading: boolean;
    errorMessage: string | undefined;
}

const initialState: IState = {
    data: undefined,
    isLoading: false,
    errorMessage: undefined
}

export const getContactLastMessageAction = createAsyncThunk<IChatMessage[], contactLastMessageRequest>(
    'getContactLastMessage',
    async (body) => {
        const response = await getContactLastMessage(body);
        return response.data
    }
)

const getContactLastMessageSlice = createSlice({
    name: 'getContactLastMessage',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getContactLastMessageAction.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
                state.errorMessage = undefined
            })
            .addCase(getContactLastMessageAction.pending, (state) => {
                state.data = undefined
                state.isLoading = true
                state.errorMessage = undefined
            })
            .addCase(getContactLastMessageAction.rejected, (state, action) => {
                state.data = undefined
                state.isLoading = false
                state.errorMessage = action.error.message
            })
    }

})

export default getContactLastMessageSlice
