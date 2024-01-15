import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState (666);
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

  return (
    <div className='App'>
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="+3" esBotonClick={true}
            funcionClick={Mas3} />
          <Boton texto="-3" esBotonClick={true}
            funcionClick={Menos3} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={Mas1} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={Menos1} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
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

export default App;
