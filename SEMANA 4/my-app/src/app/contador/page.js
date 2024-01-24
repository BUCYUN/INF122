'use client'
import { useState } from 'react';
import style from './page.module.css'
import Boton from './components/Boton';
import Contador from './components/Contador';

function page() {
  const [nroClicks, setNumClicks] = useState (0);
  const [show, setShow] = useState(true);
  const Mas3 = () => {
    setNumClicks(nroClicks + 3);
    //console.log("Click");
  }
  const Menos3 = () => {
    setNumClicks(nroClicks - 3);
    //console.log("Reiniciar")
  }
  const Mas1 = () => {
    setNumClicks(nroClicks + 1);
    //console.log("Reiniciar")
  }
  const Menos1 = () => {
    setNumClicks(nroClicks - 1);
    //console.log("Reiniciar")
  }
  const reiniciar = () => {
    setNumClicks(0)
  }
  const mostrar = () => {
    setShow(!show);
  }

  return (
    <div className={style.App}>
      <div className={style["contenedor-principal"]}>
        <Contador nroClicks={nroClicks} mostrar={show} />
                <div className={style['contendedor-botones']}>
                    <div className={style['contendedor-botones-numeros']}>
                        <Boton texto="-3" esBotonClick={true}
                            funcionClick={Menos3} />
                        <Boton texto="+3" esBotonClick={true}
                            funcionClick={Mas3} />
                        <Boton texto="-1" esBotonClick={true}
                            funcionClick={Menos1} />
                        <Boton texto="+1" esBotonClick={true}
                            funcionClick={Mas1} />
                    </div>

                    <Boton texto="Reiniciar" esBotonClick={false}
                        funcionClick={reiniciar} />
                    <Boton texto="Mostrar/Ocultar" esBotonClick={false} funcionClick={mostrar} />
                </div>
      </div>
    </div>

    /*<div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>*/
  );
}

export default page;