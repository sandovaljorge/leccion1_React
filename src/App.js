import React from 'react'
import './css/estilos.css'

const App = () => {
    
    //constantes y funciones
    const nombre = 'Jorge Armando Sandoval';
    const saludo = 'Curso de React - Intecap';

    return (
        //render - lo que se muestra
        //Fragment
        <>  
            <h1 className='titulo'>{saludo} <br /> {nombre}</h1>        
        </>
    )
}

export default App