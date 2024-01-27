
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
      <Perfil imagen='mi_perfil.jpg' nombre='Brayan Umpiri' profesion='Super Junior Frontier'/>
      <Record experiencia='2' proyectos='2' satis='3'/>
      <BotonContact/>
      <BotonPortfolio/>
  </div>
 );
}
