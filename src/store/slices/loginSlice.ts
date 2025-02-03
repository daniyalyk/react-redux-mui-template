import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
    isAuthenticated: boolean;
}

const initialState: LoginState = {
    isAuthenticated: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const {
    login,
    logout
} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
