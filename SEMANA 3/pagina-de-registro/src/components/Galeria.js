import React from "react";
import "../styles/Galeria.css"

function Galeria () {
    return(
        <div className="perfil-galeria">
            <h1>Pepito</h1>
            <div className="images">
                <img className="card-image"
                    src={require("../images/imagen1.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen2.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen1.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen2.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen1.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen2.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen1.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen2.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen1.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen2.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen1.jpeg")} 
                    alt="foto" />
                <img className="card-image"
                    src={require("../images/imagen2.jpeg")} 
                    alt="foto" />
            </div>
        </div>
    );

}
export default Galeria;