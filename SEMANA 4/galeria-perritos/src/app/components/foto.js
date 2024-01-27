"use client"
import { useState, useEffect } from "react";
import style from './foto.module.css'
import Image from "next/image";

function foto (){
    const [perrito, setPerrito] = useState ('/vercel.svg');
    const [estado, setEstado] = useState('esperando...');
    const [habilidad, setHabilidad] =useState();
    const [habilidades, setHabilidades] = useState(null);
    
    
    const url = 'https://pokeapi.co/api/v2/pokemon/eevee';
    //useEffect (() => {
    //    fetch (url)
    //    .then(res => res.json())
    //    .then(data => {
    //        setPerrito(data.sprites.front_default),
    //        setEstado(data.species.name)
    //        setHabilidad (data.abilities[0].ability.name)
    //        setHabilidades (data)
    //        
    //    }) 
    //    console.log(habilidad);
    //       
    //},[]);

    useEffect(()=>{
        fetch (url)
            .then(res => res.json())
            .then(data => {
                setPerrito(data.sprites.front_default),
                setEstado(data.species.name),
                setHabilidades(data.abilities)
            }) 
    },[])
    

    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image priority="true" src={perrito} alt="perrito" width={250} height={250}/>
            

            <h2>{habilidad}</h2>

            <ul className="">
                {habilidades?.map(abilities=>(
                    <li>{abilities.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default foto;
