import React from 'react'
import {useContext} from "react" 
import { CartContext } from './CartContext';
import ItemCarrito from './ItemCarrito';

function Cart() {
    const contexto = useContext(CartContext);
    return (
        <div>
            {
                contexto.cartList.length > 0
                ? contexto.cartList.map(item =>
                    <ItemCarrito
                        key={item.idItem}
                        producto={item.nombreItem}
                        precio={item.precioItem}
                        cantidad={item.cantidad}
                    />
                    )
                : <h1 className="text-center">El carrito se encuentra vacio</h1>
            }
        </div>
    )
}

export default Cart
