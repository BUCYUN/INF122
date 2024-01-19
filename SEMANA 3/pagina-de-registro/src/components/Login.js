import React, { useState } from "react";
import '../styles/Login.css'
import Boton from "./Boton";

function Login ({ingresar, registrar}) {
    return (
        <div className="contenedor">
            <label className="etiqueta">Usuario</label>
            <input type="text" placeholder="Ingresar Nombre"/>
            <label className="etiqueta">Contraseña</label>
            <input type="text" placeholder="Ingresar Contraseña"/>
            
            <div className="botones">
                <Boton text="Registrar"/>
                <Boton text="Ingreasar"/>
            </div>

            
        </div>
    )
}

export default Login;