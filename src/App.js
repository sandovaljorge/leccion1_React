import React, { Component } from 'react'
import './css/estilos.css';
import Usuarios from './components/Usuarios'
import Footer from './components/Footer';
import Boton from './components/Boton'

const App = () => {
    
    //constantes, variables y funciones
    /*const nombre = 'Jorge Armando Sandoval';
    const saludo = 'Curso de React - Intecap';
    const estudiantes = ["jose","juan","pedro","mario"];*/

    //component Usuario
    /*const Usuario = () => {
        return (
            <div>
                <h1>Usuario</h1>
                <p>Nombre: {nombre}</p>
            </div>
        )
    }*/

    const session = false;

    return (
        //return, render - lo que se muestra 
        //Fragment
        /*
        <>  
            <h1 className='titulo'>{saludo} <br /> {nombre}</h1>
            <h2 style={{color:"red"}}>{estudiantes[2]}</h2>  
            <ol>
                {   estudiantes.map((estudiante, index) => (
                    <li key={index}>{estudiante}</li>
                ))}
            </ol>
            
            <Usuario></Usuario>  
            <Usuarios></Usuarios>    
        </>*/
        <>
        {session ? 
            <>
                <Usuarios/> 
                <Footer/>
            </>: 
            <><h1 className='titulo'>Debes iniciar session</h1>
            <Boton></Boton>
            <Footer/>
            </>}
        </>
        )
        
}
        

export default App