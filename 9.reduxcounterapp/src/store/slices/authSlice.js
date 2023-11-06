import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedIn:false,
    },
    reducers:{
        AUTH_TOGGLE: (state) => { 
            state.isLoggedIn = !state.isLoggedIn;
         }
    }
}) 

export const {AUTH_TOGGLE} = authSlice.actions
export default authSlice.reducer