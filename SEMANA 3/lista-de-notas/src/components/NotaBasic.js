import React from "react";
import '../styles/Nota.css'

function NotaBasic ({nota, onEdit, onDelete}){
    return (
        <dic>
            <p>{nota}</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>
            </div>
        </dic>
    )
}

export default NotaBasic;