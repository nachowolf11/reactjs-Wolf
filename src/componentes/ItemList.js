import React from 'react'

function ItemList(props) {
    return(
    <>
    <h3>{props.producto}</h3>
    <span>{props.precio}</span>
    </>
    )
}
export default ItemList;