import './App.css';
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer';
import {data} from './data';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer items={data}/>
    </>
  );
}

export default App;
