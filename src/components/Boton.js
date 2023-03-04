//useState es una funcion que nos permite crear variables de estado en un componente.
import React, {useState} from "react";
import '../css/estilos.css'

const Boton = () => {

    const [contador, setContador] = useState(0)


    return (

        <>
            <p className="titulo">Haz click {contador}</p>
            <button className="boton" onClick={()=> setContador(contador+1)}>+</button>
            <p className="titulo">Haz click para disminuir {contador}</p>
            <button className="btn" onClick={()=> setContador(contador-1)}>-</button>
        </>
    )
}

export default Boton