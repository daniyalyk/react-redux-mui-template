import { createSlice } from "@reduxjs/toolkit";

interface HomeState {
    title: string;
}

const initialState: HomeState = {
    title: "Welcome to Home Page",
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
    },
});

export const {
    setTitle
} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
