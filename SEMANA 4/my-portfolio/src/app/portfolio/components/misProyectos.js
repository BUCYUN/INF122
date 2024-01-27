'use client'

import React from "react";
import Image from "next/image";
import style from './proyectoPreview.module.css'
import Link from "next/link";

export default function misProyectos(){
    return(
        <div className={style.imagenes}>
            <section className={style.imagen}>
                <div>
                    <Link href='/proyectos'>
                        <Image width='362' height='226' src='/assets/Images/proyecto1.png' alt=""/>
                        <figcaption>
                            <h1>Proyecto 1</h1>
                            <p>Pagina al primer proyecto que hice en un examen</p>
                            <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                        </figcaption>
                    </Link>
                </div>
            </section>
        </div>
    )
}