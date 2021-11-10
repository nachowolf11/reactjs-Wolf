import React from 'react'
import {useState} from "react";


function ItemCount(props) {

    const [cantidad, setCantidad] = useState(0);
    const incrementar = () => {
        setCantidad(cantidad+1);
    }
    const reducir = () => {
        setCantidad(cantidad-1);
    }

    return (
        <>
        <div id="itemBtn" className="d-flex justify-content-between align-items-center align-self-center border border-info shadow-sm px-2 mb-3 bg-body rounded w-75">
            <button className="btn btn-light p-0 m-1" style={{fontSize: 25}} onClick={cantidad < props.stock ? incrementar : null}>+</button>
            <p className="p-0 m-0">{cantidad}</p>
            <button className="btn btn-light p-0 m-1" style={{fontSize: 25}} onClick={cantidad !=0 ? reducir : null}>-</button>
        </div>
        <div className="btn btn-outline-primary align-self-center shadow-sm px-2 mb-3 rounded w-75">Agregar al carrito</div>
        </>
    )
}

export default ItemCount
