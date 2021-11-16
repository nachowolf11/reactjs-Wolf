import React from 'react'
import { data } from '../data'
import itemsPromise from '../utyls/itemsPromise'
import {useState, useEffect} from "react"
import ItemList from './ItemList'

function ItemListContainer() {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        itemsPromise(2000,data)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ItemList items={datos}/>            
        </div>
    )
}

export default ItemListContainer
