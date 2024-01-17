import React from "react";
import { useState } from "react";
import Tablero from "./Tablero";
import Historial from "./Historial";

function Juego (){
    const [historial, setHistorial]=useState([
        {
            cuadros : Array(9).fill(null)
        }
    ])

    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState ("O");
    const [ganador, setGanador] = useState (null);

    const click = (i) => {
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        console.log("nuevoMovimiento", nuevoMovimiento);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        console.log("movimientoActual", movimientoActual);
        const cuadros = movimientoActual.cuadros.slice();
        console.log("cuadrosTemp", cuadros);
        if (cuadros[i] === null) {
            cuadros[i] = jugador;
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
        }
        if (calcularGanador(cuadros) !== null) {
            setGanador(calcularGanador(cuadros));
        }
    }
    const saltarA = (movimiento) => {
        console.log("movimiento", movimiento);
        setNroMovimiento(movimiento);
        setJugador(jugador === "X" ? "O" : "X");

    }
    const movimientoActual = historial[nroMovimiento];

    /*const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if(cuadrosTemp[i] === null){
            cuadrosTemp[i] = jugador;
            setCuadros(cuadrosTemp);
            setJugador(jugador === "X" ? "O" : "X")
        }
        if (calcularGanador(cuadrosTemp) !== null) {
            alert("Ganador: " + calcularGanador(cuadrosTemp));
            setCuadros(Array(9).fill(null));
        }
    }*/

    return(
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganadaor: ${ganador}`: `Próximo jugador: ${jugador}`}</h2>
                <Tablero cuadros={movimientoActual.cuadros} onclick={(i) => click(i)} />
            </div>
            <Historial historial={historial} saltarA={saltarA} />
        </div>
    );
}

export default Juego;

function calcularGanador(cuadros){
    const lineas =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;

}