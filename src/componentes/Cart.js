import React from 'react'
import {useContext} from "react" 
import { CartContext } from './CartContext';

function Cart() {
    const contexto = useContext(CartContext);
    return (
        <div>
            {
                contexto.length > 0
                ? <h2>Algo hay mepa</h2>
                : <h2>No hay nada pa</h2>
            }
        </div>
    )
}

export default Cart
