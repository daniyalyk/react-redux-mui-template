import { configureStore } from "@reduxjs/toolkit";
import { homeReducer, loginReducer } from "./slices";

console.log({ homeReducer }, { loginReducer });
export const store = configureStore({
    reducer: {
        home: homeReducer,
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
