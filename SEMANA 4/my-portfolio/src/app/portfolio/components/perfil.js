'use client'

import React from "react"
import style from './perfil.module.css'
import Image from "next/image"
import Link from "next/link"

export default function perfil ({nombre, profesion}){
    return(
            <div className={style.profile}>
                <div className={style.userphoto}>
                    <Image width={192} height={192} src='/assets/images/mi_perfil.jpg' alt="foto" priority/>
                </div>
                <div className={style.name}>
                    <h1>{nombre}</h1>
                    <p className={style.profesion}>{profesion}</p>
                    <div className={style.icons}>
                        <Link href='https://github.com/BUCYUN'>
                            <Image src="/assets/icons/github.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                        </Link>
                        <Link href='https://twitter.com/home?lang=es'>
                            <Image src="/assets/icons/twitter.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/brayan-umpiri-chejo-241a2b2b0/'>
                            <Image src="/assets/icons/linkedin.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                        </Link>
                        <Link href='https://www.youtube.com/channel/UCpaeTFETC3od_UVbzOEi2Iw'>
                            <Image src="/assets/icons/youtube.svg" alt="Vercel Logo" className={style.icon} width={36} height={37}/>
                        </Link>
                    </div>
                </div>
            </div>
    );
}