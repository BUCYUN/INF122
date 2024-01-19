import React, { useState } from "react";
import '../styles/ListaNotas.css'

function ListaNotas(){
    const[notas, setNotas] = useState([])
    const[texto, setTexto] = useState('')
    const addNota = () => {
        setNotas([...notas, texto])
        console.log(notas)
    }

    const onEdit = () => {
        console.log("Editas")
    }

    const onDelete = () => {
        console.log("Eliminar")
    }
    return(
        <div className='contenedor-principal'>
            <input 
            className="input"
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}/>
            <button className='boton' onClick={addNota}>Agregar Nota</button>
        </div>
        
    );
}

export default ListaNotas