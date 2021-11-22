import './App.css';
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

    <NavBar/>

    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
