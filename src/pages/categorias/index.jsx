/* import React from "react";

const CategoriasScreen =() =>{
//hooks para componentes funcionales, guardar de forma local  
//Para componentes basados en clases
//use effect ciclo de vida 


    const [contador,setContador]=React.useState(0)
    const [nombre,setNombre]=React.useState("")
    const [productos,setProductos]=React.useState([])
    const [categorias,setCategorias]=React.useState({})
    const [personas,setPersonas]=React.useState("")
    const [isLogged,setIsLogged]=React.useState(false)

    React.useEffect(()=>{
        console.log("Me ejecuto cada que tengo un cambio")
    })// sin argumentos, se va a disparar cada que el componente sufra un cambio 
    React.useEffect(()=>{
        console.log("Me ejecuto una sola vez cuando se monta el dom")
    },[])// como argumentos, recibe las dependencias, cuando tiene dependecias vacias se ejecuta una sola vez y es cuando se crea el dom 
    React.useEffect(()=>{
        console.log("Me ejecuto una sola vez cuando se monta el dom y cada que mis dependecias sufren un cambio")
    },[contador])// cuando tiene dependencias se ejecuta una unica vez y es cuando el dom y cada que esta sufra un cambio 
    React.useEffect(()=>{  
        return ()=>{
            console.log("Me ejecuto cuando el componente se destruye o sufre un cambio")
        }
    },[])
   
    const incrementarContador =()=>{
    setContador(contador + 1)
 } 
 
 const handleChangeName =(e)=>{
    const {value, name}= e.target 
    setNombre(value)
 }
    return(
    <>
    <label>Nombre</label>
    <input type="text" onBlur={(e)=>handleChangeName(e)} />
         <button type="button" onClick={()=>incrementarContador}>Incrementar</button>
    </>
 )
}
export default CategoriasScreen */
import React, {useState, useEffect} from 'react';

const CategoriasScreen = () => {
    
    //useStates -> manejo de estados locales a nivel de componente.
    const [contador,setContador] = useState(0)
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [productos,setProductos] = useState([])
    const [categorias,setCategorias] = useState({})
    const [persona,setPersona] = useState("")
    const [isLogged,setIsLogged] = useState(false)

   
    
    React.useEffect(()=>{},[])

    //useEffect -> reemplaza el ciclo de vida de los componentes basados en clases
    React.useEffect(()=>{console.log("Me ejecuto cada que tengo un cambio")}) // -> sin argumentos, se va a disparar cada que cualquiera de los hooks sufra un cambio

    React.useEffect(()=>{
        console.log("Me ejecuto una sola vez cuando se monta el DOM")
    },[]) // -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias vacías se va a ejecutar una única vez y es cuando se monta el DOM
    
    React.useEffect(()=>{
        console.log("Me ejecuto una sola vez cuando se monta el DOM y cada que mis dependencias [CONTADOR] sufren un cambio")
        if(nombre != "" && apellido != ""){
            saludar();
        }
    },[contador,nombre,apellido]) // -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias se va a ejecutar una única vez y es cuando se monta el DOM y cada que esa dependencia sufra un cambio

    const saludar = () => {
        alert("Bienvenido "+nombre+ " "+apellido);
    }

    React.useEffect(()=>{        
        return () => {
            console.log("Me ejecuto cuando el componente se destruye o sufre un cambio.")
        }
    },[]) // -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias se va a ejecutar una única vez y es cuando se monta el DOM y cada que esa dependencia sufra un cambio
    

    
    //Hooks -> para componentes funcionales
    //State -> para componentes basados en clases.

    const incrementarContador = () => {
        setContador(contador + 1);
    }

    const handleChangeName = (e) => {
        const {value, name} = e.target;
        setNombre(value);
        setContador(contador + 1);
    }

    const handleChangeApellido = (e) => {
        const {value, name} = e.target;
        setApellido(value);
    }

    return(
        <>
        Contador: {contador} <br/>
        Valor de Nombre: {nombre} <br/>
        Valor de Apellido: {apellido} <br/>

        <label>Nombres</label>
        <input type="text" onBlur={(e)=>handleChangeName(e)} />

        <label>Apellidos</label>
        <input type="text" onBlur={(e)=>handleChangeApellido(e)} />
        <br/>
        <button type="button" onClick={()=>incrementarContador()}>Incrementar</button>
        </>
    )
}

export default CategoriasScreen;