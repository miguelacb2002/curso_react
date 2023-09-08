import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState:{
        token: null,
        isAuth: false,
        email: null 
    }, 
    reducers:{
        setLoginAction: (state,action)=>{ // state permite acceder a mi estado inicial 
            return {
                state, 
                token: action.payload.token,
                isAuth: true, 
                email: action.payload.email
            }
        }
    }
})
export const {setLoginAction}=authSlice.actions
export default authSlice.reducers