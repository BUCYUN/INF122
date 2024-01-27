'use client'

import React from "react";
import Image from "next/image";
import style from './proyectoPreview.module.css'

export default function proyectoPreview(){
    return(
        <div className={style.imagenes}>
            <section className={style.imagen}>
                <div>
                    <Image width='362' height='226' src='/assets/Images/HTML.jpg' alt=""/>
                    <figcaption>
                        <h1>SmarterTrading411</h1>
                        <p>Landing page of SmarterTrading411 created using wordPress</p>
                        <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                    </figcaption>
                </div>
                <div>
                    <Image width='362' height='226' src="/assets/Images/CSS.png" alt=""/>
                    <figcaption>
                        <h1>SmarterTrading411</h1>
                        <p>Landing page of SmarterTrading411 created using wordPress</p>
                        <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                    </figcaption>
                </div>
                <div>
                    <Image width='362' height='226' src="/assets/Images/JS.jpeg" alt=""/>
                    <figcaption>
                        <h1>SmarterTrading411</h1>
                        <p>Landing page of SmarterTrading411 created using wordPress</p>
                        <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                    </figcaption>
                </div>  
                <div>
                    <Image width='362' height='226' src="/assets/Images/REACT.png" alt=""/>      
                    <figcaption>
                        <h1>SmarterTrading411</h1>
                        <p>Landing page of SmarterTrading411 created using wordPress</p>
                        <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                    </figcaption>
                </div>  
                <div>
                    <Image width='362' height='226' src="/assets/Images/NEXTJS.png" alt=""/>
                    <figcaption>
                        <h1>SmarterTrading411</h1>
                        <p>Landing page of SmarterTrading411 created using wordPress</p>
                        <Image width={20} height={20} src="icons/Link.svg" alt=""/>
                    </figcaption>
                </div>
                <div>
                    <Image width='362' height='226' src="/assets/Images/GITHUB.jpeg" alt=""/>
                    <figcaption>
                        <h1>SmarterTrading411</h1>
                        <p>Landing page of SmarterTrading411 created using wordPress</p>
                        <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                    </figcaption>
                </div>
                
            </section>
        </div>
    )
}