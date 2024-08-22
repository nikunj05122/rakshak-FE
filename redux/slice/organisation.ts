import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";
import axios, { AxiosResponse } from "axios";

import { URL } from "@/utils/constant";

interface searchPayload {
    name: string;
}

interface searchResponceData {
    img: {
        url: string;
        filePath: string;
        type: string;
    };
    name: string;
    slug: string;
    id: string;
}

interface searchResponce {
    data: Array<searchResponceData>;
}

export const searchOrganizationAsync = createAsyncThunk<
    AxiosResponse<searchResponce>,
    searchPayload
>("searchOrganizationAsync", async (data: searchPayload) => {
    const response = await axios.get(
        `${URL}/organization/search?name=${data.name}`
    );
    return response;
});

const organizationSlice = createSlice({
    name: "organization",
    initialState: {
        isLoading: false,
        data: [] as Array<searchResponceData>,
        searchData: [] as Array<searchResponceData>,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchOrganizationAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(
                searchOrganizationAsync.fulfilled,
                (
                    state,
                    action: PayloadAction<AxiosResponse<searchResponce>>
                ) => {
                    state.isLoading = false;
                    state.searchData = action.payload.data.data;
                }
            )
            .addCase(searchOrganizationAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
    reducers: {},
});

export const getOrganizationSelector = createSelector(
    (state) => state.organization,
    (state) => state
);

export default organizationSlice.reducer;
