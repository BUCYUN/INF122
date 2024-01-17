import logo from './logo.svg';
import './App.css';
import NotaBasic from './components/NotaBasic';
import ListaNotas from './components/ListaNotas';

function App() {
  
  const onDelete = () => {
    console.log("Eliminar")
  };
  const onEdit = () => {
    console.log("Editar")
  };
  return (
    <div className="App">
      <ListaNotas/>
      <NotaBasic nota={"Hola Mundo"} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  );
}

export default App;
