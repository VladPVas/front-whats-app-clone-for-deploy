import {IContact} from "../../../../../shared/api/ChatSider/Contacts/interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getContacts} from "../../../../../shared/api/ChatSider/Contacts";
import {DefaultLoginDataRequest} from "../../../../../shared/api/commonInterface";

interface IState {
    data:  IContact[]| undefined;
    isLoading: boolean;
    errorMessage: string | undefined;
}

const initialState: IState = {
    data: undefined,
    isLoading: false,
    errorMessage: undefined
}

export const getContactsAction = createAsyncThunk<IContact[], DefaultLoginDataRequest>(
    'getContacts',
    async (body) => {
        const response = await getContacts(body);
        return response.data;
    }
)

const getContactsSlice = createSlice({
    name: 'getContacts',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getContactsAction.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
                state.errorMessage = undefined
            })
            .addCase(getContactsAction.pending, (state) => {
                state.data = undefined
                state.isLoading = true
                state.errorMessage = undefined
            })
            .addCase(getContactsAction.rejected, (state, action) => {
                state.data = undefined
                state.isLoading = false
                state.errorMessage = action.error.message
            })
    }

})

export default getContactsSlice
