import React from 'react'

function ItemDetail({item}) {
    return (
        <div>
            <img src={item.imagen}/>
            <h2>{item.producto}</h2>
            <p>{item.precio}</p>
        </div>
    )
}

export default ItemDetail
