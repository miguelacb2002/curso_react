import { createSlice } from "@reduxjs/toolkit"
//acciones y reusers 

const authSlice = createSlice({
    name:'authslice',
    initialState: {
        token: null,
        isAuth: false,
        email:null 
    },
    reducers: { // Permiten devolver un nuevo estado o modificar el estado actual
        setLoginAction: (state, action)=>{
            return{
                ...state, 
                token : action.payload.token,
                isAuth: action.payload.isAuth,
                email: action.payload.email
            }
        }
    }
})

export const {setLoginAction} = authSlice.actions;
export default authSlice.reducer;