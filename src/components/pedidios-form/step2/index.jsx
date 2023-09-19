import React, { useState,useEffect } from "react";

const PedidosFormStep2 =(props)=>{
    const {productosSeleccionados,setProductosSeleccionados}= props
    const [productos, setProductos]=useState([])
    useEffect (()=>{
        fetch("http://localhost:4000/api/productos")
        .then(response=>response.json())
        .then(data=>{
            setProductos(data)/* cambiar el estado utilizando el API */
        })
        .catch(error=>{
            console.error("Error al cargar los productos", error)
        })
    },[])
    
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
                                        <img src={"https://via.placeholder.com/200"} alt ="product image" className="img-fluid"/>
                                        <p><b>Precio: {data.precioVenta}</b></p> {/* usar data.(nombra del schema) */}
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