'use client'

import React from "react";
import style from './record.module.css'

export default function record({experiencia, proyectos, satis}){
    return(
        <div className={style.record}>
            <p>
                {experiencia} <br/>Years of work <br/>experience
                </p>
            <p>
                {proyectos}+ <br/>Completed <br/>projects
                </p>
            <p>
                {satis}+ <br/>Satisfied <br/>customers
            </p>
        </div>
    )
}