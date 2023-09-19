import React, {useEffect, useState} from "react";

//props son las propiedades que recibe el componente 
const PedidosFormStep1 =(props)=>{
    //destructurar 
    const {clienteSeleccionado, setClienteSeleccionado} = props 
    const [cliente, setCliente]=useState([]) //hook con un array vacio como estado inicial 
    useEffect (()=>{
        fetch("http://localhost:4000/api/clientes")
        .then(response=>response.json())
        .then(data=>{
            setCliente(data)/* cambiar el estado utilizando el API */
        })
        .catch(error=>{
            console.error("Error al cargar clientes", error)
        })
    },[])

    return (
        <div className="row">
            <div className="col">
                <label>Seleccionar cliente</label>
                {/* traigo un evento que llama a la funcion con el valor del target del evento  */}
                <select className="form-control" value={clienteSeleccionado} onChange={(e) => setClienteSeleccionado(e.target.value)}>
                  {cliente.map((cliente)=>(
                    <option key={cliente.id} value={cliente.nombres}>{cliente.nombres}</option> // key -->> llave de cliente cliente.nombre viene del schema de prisma 
                  ))}
                </select>  
            </div>
        </div>
    )
}
export default PedidosFormStep1