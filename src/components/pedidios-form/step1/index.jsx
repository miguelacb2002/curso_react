import React from "react";
//props son las propiedades que recibe el componente 
const PedidosFormStep1 =(props)=>{
    //destructurar 
    const {clienteSeleccionado, setClienteSeleccionado} = props 


    return (
        <div className="row">
            <div className="col">
                <label>Seleccionar cliente</label>
                {/* traigo un evento que llama a la funcion con el valor del target del evento  */}
                <select className="form-control" value={clienteSeleccionado} onChange={(e) => setClienteSeleccionado(e.target.value)}>
                    <option>Seleccionar</option> 
                    <option value="miguel">Miguel</option> 
                    <option value="cristian">Cristian</option>  
                    <option value="samuel">Samuel</option>  
                    <option value="santiago">Santiago</option>     
                </select>  
            </div>
        </div>
    )
}
export default PedidosFormStep1