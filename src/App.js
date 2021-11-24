import './App.css';
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart';


function App() {
  return (
    <BrowserRouter>

    <NavBar/>

    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
