import React from "react";
import Boton from "./Boton";
import '../styles/Registro.css'

function Registro () {
    return(
        <div className="contenedor">
            <div className="contenedor-register">
                <label className="etiqueta">Nombre</label>
                <input className="input" type="text" placeholder="Ingresar Nombre"/>
                <label className="etiqueta">Apellido</label>
                <input className="input" type="text" placeholder="Ingresar Apellido"/>
                <label className="etiqueta">Contraseña</label>
                <input className="input" type="password" placeholder="Ingresar Contraseña"/>
                
                <div className="botones">
                    <Boton text="Registrar"/>
                </div>
            </div>
        </div>
    );
}

export default Registro;