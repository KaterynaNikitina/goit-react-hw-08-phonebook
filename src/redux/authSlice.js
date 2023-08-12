import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { 
    registerUserThunk, 
    loginUserThunk, 
    refreshUserThunk, 
    logoutUserThunk  } from "./usersOperations";


const initialState = {
    userData: null,
    authentificated: false,
    token: null,
    isLoading: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => 
    builder 
        // New User Registration
    .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
    })
    .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        Notify.success("You can use your Phonebook");
    })
    .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        Notify.failure("Unsuccessful attempt to register an account")
    })
        // Login of an existing user
        .addCase(loginUserThunk.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.authentificated = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
            Notify.success("You can use your Phonebook");
        })
        .addCase(loginUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            Notify.failure("Unsuccessful attempt to enter your account")
        })
        // Refresh of an existing user
        .addCase(refreshUserThunk.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(refreshUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.authentificated = true;
            state.userData = action.payload;
            Notify.success("You can use your Phonebook");

        })
        .addCase(refreshUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        // Logout of the current session

        .addCase(logoutUserThunk.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(logoutUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.authentificated = false;
            state.userData = null;
            state.token = null;
        })
        .addCase(logoutUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
})

export const authReducer = authSlice.reducer;