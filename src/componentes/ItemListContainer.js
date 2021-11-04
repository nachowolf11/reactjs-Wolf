import React from 'react'
import ItemList from './ItemList';

function ItemListContainer() {
    return(
        <>
        <ItemList producto="Pizza" precio="1000"/>
        <ItemList producto="Empanada" precio="200"/>
        </>
    )
}

export default ItemListContainer;