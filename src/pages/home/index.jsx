import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const authData= useSelector(state=> state.authSlice)
    return(
        <>
            El usuario autenticado es : {authData && authData.email} 
            <br></br>
            token: {authData && authData.token}
        </>
    )
}
export default HomeScreen