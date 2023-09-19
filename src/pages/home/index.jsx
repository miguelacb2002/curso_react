import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const authData= useSelector(state=> state.authSlice)
    return(
        <div style={{textAlign:"center"}}>
            El usuario autenticado es : {authData && authData.email} 
            <br></br>
            Token: {authData && authData.token}
            <br></br>
            Estado: {authData && (authData.isAuth ? "Autenticado" : "No autenticado")}
            <br></br>
        </div>
    )
}
export default HomeScreen