'use client'
import React, { useState } from "react";
import style from './botonPortfolio.module.css'
import ProyectoPreview from "./proyectoPreview";
import MisProyectos from "./misProyectos";

export default  function boton(){
    const [imgs, setImgs] = useState(true)

    const buttonMostrarImg = () => {
        setImgs(true);
    };
    const buttonDesImg = () => {
        setImgs(false);
    };


    return(
        <div className={style.buttonsContainer}>
            <div className={style.buttons}>
                <button className={style.portfolio} onClick={buttonMostrarImg} >
                    Portfolio 
                </button>
                <button className={style.skills} onClick={buttonDesImg} >
                    Skills
                </button>
            </div>
            <div className={style.containerImgs}>
                {imgs? (
                    <div>
                        <MisProyectos/>
                    </div>
                ):(
                    <div>
                        <ProyectoPreview/>
                    </div>
                )}
            </div>
        </div>
    );
}