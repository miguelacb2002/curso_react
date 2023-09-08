import React from "react";
import PedidosFormStep1 from "../../components/pedidios-form/step1";
import PedidosFormStep2 from "../../components/pedidios-form/step2";
import PedidosFormStep3 from "../../components/pedidios-form/step3";

const PedidosScreen =()=>{
    //creacion hook 
    const [step, setSTep]=React.useState(1) //se suele usar la funcion set 
    const [clienteSeleccionado, setClienteSeleccionado] = React.useState(null)
    const [productosSeleccionados, setProductosSeleccionados]= React.useState([])
    
    
    //condicionales 

    //Javascript
    //if(){}else{}

    //JSX
    // {variable &&} -> if(variable){}
    // {variable == 1 &&} -> if(variable == 1){}
    // {variable ? : } -> variable ? (verdadero) : (falso)
    // {variable == 1 ? Vista en caso de ser verdadero : Vista en caso de ser falso } -> if/else ternario

    return (
        <div className="container">
            {/* Formularios */}
            {step ==1 && <PedidosFormStep1 clienteSeleccionado={clienteSeleccionado} setClienteSeleccionado={setClienteSeleccionado}/>}
            {step ==2 && <PedidosFormStep2 productosSeleccionados={productosSeleccionados} setProductosSeleccionados={setProductosSeleccionados}/>}
            {step ==3 && <PedidosFormStep3 productosSeleccionados={productosSeleccionados} clienteSeleccionado={clienteSeleccionado}/>}
            {/* Botones */} 
            <div className="row">
                <br />
                <div className="col">
                    {step >1 && <button type="button" className="btn btn-danger" onClick={()=>setSTep(prev => prev-1)}>Atrás</button>}
                </div>
                <div className="col">
                    { step <3 && <button type="button" className="btn btn-success" onClick={()=>setSTep(prev => prev+1)}>Siguiente</button>}                
                    </div>            
            </div>
        </div>
    )
}
export default PedidosScreen