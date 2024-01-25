"use client"
import { useState, useEffect } from "react";
import style from './foto.module.css'
import Image from "next/image";

function foto (){
    const [perrito, setPerrito] = useState ('/vercel.svg');
    const [estado, setEstado] = useState('esperando...');
    const [habilidad, setHabilidad] =useState('esperando habilidad');

    const url = 'https://pokeapi.co/api/v2/pokemon/wobbuffet';
    useEffect (() => {
        fetch (url)
        .then(res => res.json())
        .then(data => {
            setPerrito(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad (data.abilities[0].ability.name)
        })    
    },[]);

    

    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perrito" width={250} height={250}/>
            <h2>{habilidad}</h2>
            <br />
        </div>
    )
}

export default foto;