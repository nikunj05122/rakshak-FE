import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/auth";
import organisationReducer from "@/redux/slice/organisation";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        organisation: organisationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
