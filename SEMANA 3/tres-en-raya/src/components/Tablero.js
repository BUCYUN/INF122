import React from "react";
import { useState } from "react";
import Cuadro from "./Cuadro";
import '../style/Tablero.css';

function Tablero ({ cuadros, onclick }){
    /*function calcularGanador(cuadros){
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
    }*/


    function renderizarCuadro(i){
        return(
            <Cuadro
                valor={cuadros[i]}
                funcion={() => onclick(i)}
            />
        )
    }
    /*const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if (cuadrosTemp[i] === null) {
            cuadrosTemp[i] = jugador;
            setCuadros(cuadrosTemp);
            setJugador(jugador === "X" ? "O" : "X");
        }
        if (calcularGanador(cuadrosTemp) !== null) {
            alert("Ganador: " + calcularGanador(cuadrosTemp));
            setCuadros(Array(9).fill(null));
        }
    }*/
    
    
    return(
        <div className="juego">
            <div className="tablero">
              

                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}

export default Tablero;