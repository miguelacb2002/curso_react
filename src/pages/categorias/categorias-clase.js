//componente basado en clases 
import React from "react";
class CategoriasClaseScreen extends React.Component{
    //montaje
    constructor(props){
        super(props)
        this.state = {
            contador:0
        }
    }
    //componentdidmount -> se montól el dom 
    componentDidMount(){
        console.log("el commponente se montó")  
    }
    //componenrdidupdate -> cuando detecta un cambio en un componente o en un estado 
    componentDidUpdate(){
        console.log("el commponente se actualizó")  
    }
    //componentwillunmount -> cuando se desmonta un componentre 
    componentWillUnmount(){
        console.log("el commponente se desmontó")  
    }
    //componentdidcatch -> para encontrar un error 
    componentDidCatch(){
        console.log("Se detectaron errores")  
    }

    incrementarContador(e){
        this.state({
            contador: this.state.contador +1
        })
    }
    // render 
    render(){
        return(
            <>
            ...contenido...
            <button type="button" onClick={this.incrementarContador}>Incrementar</button>
            {this.state.contador}
            </>
        )
    }
}
export default CategoriasClaseScreen;