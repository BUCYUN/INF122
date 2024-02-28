
import Link from "next/link";
import styles from "./page.module.css";
import Perfil from "./portfolio/components/perfil";
import Record from "./portfolio/components/record";
import BotonContact from "./portfolio/components/botonContact";
import BotonPortfolio from './portfolio/components/botonPortfolio'
import ProyectoPreview from "./portfolio/components/proyectoPreview";

export default function Home() {
 return(
  <div className="contendedor">
      <Perfil 
        imagen='mi_perfil.jpg' 
        nombre='Brayan Umpiri' 
        profesion='Super Junior Frontier'
        git='https://github.com/BUCYUN'
        twitter='https://twitter.com/home?lang=es'
        linkedin='https://www.linkedin.com/in/brayan-umpiri-chejo-241a2b2b0/'
        youtube='https://www.youtube.com/channel/UCpaeTFETC3od_UVbzOEi2Iw'
        />
      <Record experiencia='2' proyectos='2' satis='3'/>
      <BotonContact contact='https://wa.me/qr/IAJWH3KSMB6RP1'/>
      <BotonPortfolio/>
  </div>
 );
}
