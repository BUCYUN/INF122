'use client'

import React from "react";
import Image from "next/image";
import style from './simplyPortfolio.module.css'
import Link from "next/link";

export default function simplyPortfolio (){
    return(
        <div className={style.contenedor}>
            <div className={style.profile}>
                <div className={style.userPhoto}>
                    <Image width={192} height={192} src='/assetsProyecto1/images/perfil_picture.jpeg' alt="foto" priority/>
                </div>
                <div className={style.name}>
                    <h1>Victor Alvarado</h1>
                    <p className={style.profesion}>Software Engineer</p>
                    <div className={style.icons}>
                        <Image src="/assetsProyecto1/icons/github.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                        <Image src="/assetsProyecto1/icons/twitter.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                        <Image src="/assetsProyecto1/icons/linkedin.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                        <Image src="/assetsProyecto1/icons/youtube.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                    </div>
                </div>
            </div>
    
            <div className={style.record}>
                <p>
                    7 <br/>Years of work <br/>experience
                </p>
                <p>
                    50+ <br/>Completed <br/>projects
                </p>
                <p>
                    20+ <br/>Satisfied <br/>customers
                </p>
            </div>

            <div className={style.button1}>
                    <button className={style.download}>
                        Download CV <Image width={28} height={24} src='/assets/icons/Bottom Alignment.svg' alt="botonDownload"/>
                    </button>
                <Link href='mailto:contact@me.com'>
                    <button className={style.contact}>
                        Contact me
                    </button>
                </Link>
            </div>

            <div className={style.button2}>
                <div className={style.buttons}>
                    <button className={style.portfolio}>
                        Portfolio 
                    </button>
                    <button className={style.skills}>
                        Skills
                    </button>
                </div>
            </div>

            <div className={style.imagenes}>
                <section className={style.imagen}>
                    <div>
                        <Image width='362' height='226' src='/assets/Images/issima_page.png' alt=""/>
                        <figcaption>
                            <h1>SmarterTrading411</h1>
                            <p>Landing page of SmarterTrading411 created using wordPress</p>
                            <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                        </figcaption>
                    </div>
                    <div>
                        <Image width='362' height='226' src="/assets/Images/bussiness_man.png" alt=""/>
                        <figcaption>
                            <h1>SmarterTrading411</h1>
                            <p>Landing page of SmarterTrading411 created using wordPress</p>
                            <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                        </figcaption>
                    </div>
                    <div>
                        <Image width='362' height='226' src="/assets/Images/pictures_wall.jpeg" alt=""/>
                        <figcaption>
                            <h1>SmarterTrading411</h1>
                            <p>Landing page of SmarterTrading411 created using wordPress</p>
                            <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                        </figcaption>
                    </div>  
                    <div>
                        <Image width='362' height='226' src="/assets/Images/kitchen.jpeg" alt=""/>      
                        <figcaption>
                            <h1>SmarterTrading411</h1>
                            <p>Landing page of SmarterTrading411 created using wordPress</p>
                            <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                        </figcaption>
                    </div>  
                    <div>
                        <Image width='362' height='226' src="/assets/Images/mobile_app.png" alt=""/>
                        <figcaption>
                            <h1>SmarterTrading411</h1>
                            <p>Landing page of SmarterTrading411 created using wordPress</p>
                            <Image width={20} height={20} src="icons/Link.svg" alt=""/>
                        </figcaption>
                    </div>
                    <div>
                        <Image width='362' height='226' src="/assets/Images/issima_page.png" alt=""/>
                        <figcaption>
                            <h1>SmarterTrading411</h1>
                            <p>Landing page of SmarterTrading411 created using wordPress</p>
                            <Image width={20} height={20} src="/assets/icons/Link.svg" alt=""/>
                        </figcaption>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}