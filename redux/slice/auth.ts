import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";
import axios, { AxiosResponse } from "axios";

import { URL } from "@/utils/constant";

interface AuthResponseData {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
    number: string;
    email: string;
}

interface AuthResponse {
    data: {
        user: AuthResponseData;
        token: string;
    };
}

interface LoginPayload {
    email?: string;
    pin: string;
    number?: string;
}

interface signUpPayload {
    firstName: string;
    lastName: string;
    pin: string;
    pinConfirm: string;
    number: string;
    email: string;
    role?: string;
}

export const loginAsync = createAsyncThunk<
    AxiosResponse<AuthResponse>,
    LoginPayload
>("loginAsync", async (data: LoginPayload) => {
    const response = await axios.post(`${URL}/users/login`, data);
    return response;
});

export const signUpAsync = createAsyncThunk<
    AxiosResponse<AuthResponse>,
    signUpPayload
>("signUpAsync", async (data: signUpPayload) => {
    const response = await axios.post(`${URL}/users/signUp`, data);
    return response;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        data: null as AuthResponseData | null,
        token: null as string | null,
        isError: false,
        isAuthenticated: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(
                loginAsync.fulfilled,
                (state, action: PayloadAction<AxiosResponse<AuthResponse>>) => {
                    state.isLoading = false;
                    state.isAuthenticated = true;
                    state.data = action.payload.data.data.user;
                    state.token = action.payload.data.data.token;
                    setCookie("jwt", state.token);
                    if (typeof window !== "undefined") {
                        localStorage.setItem(
                            "user",
                            JSON.stringify(state.data)
                        );
                        localStorage.setItem("token", state.token);
                    }
                }
            )
            .addCase(loginAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
        builder
            .addCase(signUpAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(
                signUpAsync.fulfilled,
                (state, action: PayloadAction<AxiosResponse<AuthResponse>>) => {
                    state.isLoading = false;
                    state.isAuthenticated = true;
                    state.data = action.payload.data.data.user;
                    state.token = action.payload.data.data.token;
                }
            )
            .addCase(signUpAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
    reducers: {
        clearCredentials: (state) => {
            state.data = null;
            state.token = null;
            state.isAuthenticated = false;

            if (typeof window !== "undefined") {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
            }
        },
    },
});

export const getAuthSelector = createSelector(
    (state: {
        auth: {
            user: AuthResponseData | null;
            token: string | null;
            isError: boolean;
            isAuthenticated: boolean;
            isLoading: boolean;
        };
    }) => {
        if (typeof window !== "undefined") {
            const newState: {
                user: AuthResponseData | null;
                token: string | null;
            } = {
                user: null,
                token: null,
            };
            const user = localStorage.getItem("user");
            if (user) newState["user"] = JSON.parse(user);
            newState["token"] = localStorage.getItem("token");
            return {
                ...newState,
                isError: state.auth.isError,
                isLoading: state.auth.isLoading,
                isAuthenticated: state.auth.isAuthenticated,
            };
        }
        return state.auth;
    },
    (state) => state
);

export default authSlice.reducer;
