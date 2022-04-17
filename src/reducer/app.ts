import { createSlice } from '@reduxjs/toolkit';
import {AppStateType} from "../types/User";

const initialState: AppStateType = {
    user: null,
    token: "",
}

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: {},
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        },
    },
});


export default appSlice.reducer;
export const { setUser } = appSlice.actions;