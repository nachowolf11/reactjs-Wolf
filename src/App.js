import './App.css';
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart';
import CartContextProvider from './componentes/CartContext';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>

    <NavBar/>

    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/finalizarCompra" element={<div>Ingresa los datos de tu tarjeta de credito, no estamos intentando estafarte :D</div>}/>
    </Routes>

    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
