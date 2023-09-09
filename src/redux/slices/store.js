import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
export const store =configureStore({
    reducer: { // cuando nos autentiquemos vamos a crear el estado global de la aplicacion 
      authSlice
    }
})