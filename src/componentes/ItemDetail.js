import React from 'react'
import ItemCount from "./ItemCount";
import {useState} from "react"
import { Link } from "react-router-dom";

function ItemDetail({item}) {
    const [compraCant, setCompraCant] = useState(0)

    const onAdd = (cantidad) => {
        alert("Agregaste " + cantidad + " productos al carrito");
        setCompraCant(cantidad)
    }

    return (
        <div className="row justify-content-center text-center g-0">
            <h2>{item.producto}</h2>
            <p>{item.precio}</p>
            {
                compraCant === 0
                ? <ItemCount stock={item.stock} onAdd={onAdd}/>
                : <Link to="/cart"><button className="btn btn-info">Ir al carrito</button></Link>
            }
            
        </div>
    )
}

export default ItemDetail
