import React from "react";

function Boton({text}){
    
    const click = () => { 
        console.log(text)
    }

    return(
        <div className="boton">
            <button onClick={click}>
                {text}
            </button>
        </div>
    );

}
export default Boton;