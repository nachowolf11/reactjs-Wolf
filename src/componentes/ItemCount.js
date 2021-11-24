import React from 'react'
import {useState} from "react";


function ItemCount({stock, onAdd}) {

    const [cantidad, setCantidad] = useState(1);
    const incrementar = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1);
        }
    }
    const reducir = () => {
        if(cantidad > 1)
        setCantidad(cantidad-1);
    }

    return (
        <>
        <div id="itemBtn" className="d-flex justify-content-between align-items-center align-self-center border border-info shadow-sm px-2 mb-3 bg-body rounded w-75">
            <button className="btn btn-light p-0 m-1" style={{fontSize: 25}} onClick={incrementar}>+</button>
            <p className="p-0 m-0">{cantidad}</p>
            <button className="btn btn-light p-0 m-1" style={{fontSize: 25}} onClick={reducir}>-</button>
        </div>
        {
            stock > 0
            ? <button className="btn btn-primary align-self-center shadow-sm px-2 mb-3 rounded w-50" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            : <button type="button" disabled className="btn btn-primary align-self-center shadow-sm px-2 mb-3 rounded w-50">Agregar al carrito</button>
        }
        </>
    )
}

export default ItemCount
