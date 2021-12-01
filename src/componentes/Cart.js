import React from 'react'
import {useContext} from "react" 
import { CartContext } from './CartContext';
import ItemCarrito from './ItemCarrito';
import { Link } from "react-router-dom";

function Cart() {
    const contexto = useContext(CartContext);
    let total = 0
    return (
        <>
        <div>
            {
                contexto.cartList.length > 0
                && 
                <div  className="d-flex justify-content-between m-3">
                    <div>
                    <button type="button" className="btn btn-danger me-3" onClick={() => contexto.vaciarCarrito()}>Vaciar carrito</button>
                    <Link to="/"><button type="button" className="btn btn-info">Productos</button></Link>
                    </div>
                    <div>TOTAL: {contexto.sumarTotal(total)}</div>
                </div>
            }
        </div>
        <div className="mx-3">
            {
                contexto.cartList.length > 0
                ?
                <div>{
                    contexto.cartList.map(item =>
                    <ItemCarrito
                        key={item.idItem}
                        producto={item.nombreItem}
                        precio={item.precioItem}
                        cantidad={item.cantItem}
                        >
                        <button type="button" className="btn btn-danger" onClick={() => contexto.borrarItem(item.idItem)}>Borrar Item</button>
                    </ItemCarrito>
                    )}
                    <Link to="/finalizarCompra"><button type="button" className="btn btn-success mt-3">Finalizar compra</button></Link>
                </div> 
                
                :
                <div className="d-flex flex-column">
                    <h1 className="text-center">El carrito se encuentra vacio</h1>
                    <Link to="/" className="align-self-center"><button type="button" className="btn btn-info">Ver Productos</button></Link>
                </div>
                
            }
        </div>
        </>
    )
}

export default Cart
