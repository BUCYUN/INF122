import React from "react";
import { useState } from "react";
import Tablero from "./Tablero";
function Juego (){
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState ("O");
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if(cuadrosTemp[i] === null){
            cuadrosTemp[i] = jugador;
            setCuadros(cuadrosTemp);
            setJugador(jugador === "X" ? "O" : "X")
            console.log(cuadros)
        }
    }

    return(
        <Tablero cuadros={cuadros} onclick={click}/>
    );
}