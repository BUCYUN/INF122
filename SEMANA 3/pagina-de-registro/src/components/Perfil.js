
import Boton from "./Boton";

function Perfil () {

    return (
        <div className="contenedor">
            <label className="etiqueta">Nombre</label>
            <input type="text" placeholder="Ingresar Nombre"/>
            <label className="etiqueta">Apellido</label>
            <input type="text" placeholder="Ingresar Apellido"/>
            <label className="etiqueta">Contraseña</label>
            <input type="password" placeholder="Ingresar Contraseña"/>
            
            <div className="botones">
                <Boton text="Editar"/>
            </div>

            
        </div>
    )
}

export default Perfil;