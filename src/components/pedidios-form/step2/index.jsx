import React from "react";

const PedidosFormStep2 =(props)=>{
    const {productosSeleccionados,setProductosSeleccionados}= props

    
    const productos = [
        {
            id: 1,
            nombre: "perro Familiar",
            imagen: "https://via.placeholder.com/200",
            categorias:"perro",
            precio: 20000
        },
        {
            id: 2,
            nombre: "perro con queso",
            imagen: "https://via.placeholder.com/200",
            categorias:"perro",
            precio: 15000
        },
        {
            id: 3,
            nombre: "perro Queso tocineta",
            imagen: "https://via.placeholder.com/200",
            categorias:"perro",
            precio: 17000
        }        
    ]
    const handleAddProducts = (productData)=>{
        setProductosSeleccionados([...productosSeleccionados, productData])
        alert ("Producto agregado exitosamente")
    }
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    {productos && productos.length>0 && productos.map((data,index)=>{
                        return(
                            <div className="col-lg-3" key={index}>
                                <div className="card" >
                                    <div className="card-body">
                                        <div className="card-title">{data.nombre}</div>
                                        <img src={data.imagen} alt ="product image" className="img-fluid"/>
                                        <p><b>Precio: {data.precio}</b></p>
                                        <button type= "button" onClick={()=>handleAddProducts(data)} className="btn btn-info">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default PedidosFormStep2