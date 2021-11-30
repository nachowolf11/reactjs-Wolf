import React from 'react'
import { data } from '../data'
import itemsPromise from '../utils/itemsPromise'
import {useState, useEffect} from "react"
import {useParams} from "react-router"
import ItemList from './ItemList'

function ItemListContainer() {
    const [datos, setDatos] = useState([])
    const { idCategoria } = useParams();

    useEffect(() => {
        itemsPromise(1000,data.filter(item =>{
            if(idCategoria === undefined) return item
            return item.categoria === idCategoria
        }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [datos])

    return (
        <div>
            <ItemList items={datos}/>            
        </div>
    )
}

export default ItemListContainer
