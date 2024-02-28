'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from './botonContact.module.css'

export default function botonContact({contact}){
    return(
        <div className={style.botones}>
            <Link href=''>
                <button className={style.download}>
                    Download CV <Image width={28} height={24} src='/assets/icons/Bottom Alignment.svg' alt="botonDownload"/>
                </button>
            </Link>
            <Link href={contact}>
                <button className={style.contact}>
                    Contact me
                </button>
            </Link>
            
        </div>
    )
}