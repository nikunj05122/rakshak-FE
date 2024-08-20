import axios, { AxiosResponse } from "axios";
import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";

import { URL } from "@/utils/constant";

interface LoginResponseData {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
    number: string;
    email: string;
}

interface LoginResponse {
    data: {
        user: LoginResponseData;
        token: string;
    };
}

interface LoginPayload {
    email?: string;
    pin: string;
    number?: string;
}

export const loginAsync = createAsyncThunk<
    AxiosResponse<LoginResponse>,
    LoginPayload
>("loginAsync", async (data: LoginPayload) => {
    const response = await axios.post(`${URL}/users/login`, data);
    return response;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        data: null as LoginResponseData | null,
        token: null as string | null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(
            loginAsync.fulfilled,
            (state, action: PayloadAction<AxiosResponse<LoginResponse>>) => {
                state.isLoading = false;
                state.data = action.payload.data.data.user;
                state.token = action.payload.data.data.token;
            }
        );
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
    reducers: {},
});

export const getAuthSelector = createSelector(
    (state) => state.auth,
    (state) => state
);

export default authSlice.reducer;
