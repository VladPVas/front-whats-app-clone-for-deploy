import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {signIn} from "../../../../shared/api/AuthMenu";
import {DefaultLoginDataRequest} from "../../../../shared/api/commonInterface";


interface IState {
    data: string | null;
    isLoading: boolean;
    errorMessage: string | undefined;
}

const initialState: IState = {
    data: null,
    isLoading: false,
    errorMessage: undefined
}

export const signInAction = createAsyncThunk<string, DefaultLoginDataRequest>(
    "signIn",
    async (body) => {
        const response = await signIn(body);
        return response.data;
    }
)

const signInSlice = createSlice({
    name: 'signIn',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInAction.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.errorMessage = undefined
            })
            .addCase(signInAction.pending, (state) => {
                state.isLoading = true
                state.errorMessage = undefined
            })
            .addCase(signInAction.rejected, (state, action) => {
                state.isLoading = false
                state.errorMessage = action.error.message
            })
    }

})

export default signInSlice
