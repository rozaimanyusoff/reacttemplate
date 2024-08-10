// src/store/authSlice.tsx

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    user: any | null; // Define a proper type for the user if you have one
}

const initialState: AuthState = {
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            console.log('setToken action called with:', action.payload);
            state.token = action.payload;
        },
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload;
        },
        logout(state) {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;