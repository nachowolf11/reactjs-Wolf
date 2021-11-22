import React from 'react'
import ItemCount from "./ItemCount";

function ItemDetail({item}) {
    return (
        <div>
            <h2>{item.producto}</h2>
            <p>{item.precio}</p>
            <ItemCount stock={item.stock}/>
        </div>
    )
}

export default ItemDetail
