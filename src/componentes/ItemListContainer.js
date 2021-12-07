import React from 'react'
import {useState, useEffect} from "react"
import { useParams } from "react-router";
import ItemList from './ItemList'
import db from '../utils/fireBase'
import { collection, getDocs } from "firebase/firestore";

const firestoreFetch = async () =>{
    let query;
    if (idCategoria) {
        query = query(collection(db, "products"), where('categoryId', '==', idCategoria));
    } else {
        query = query(collection(db, "products"), orderBy('name'));
    }
    const querySnapshot = await getDocs(collection(query));
    const dataFromFireStore = querySnapshot.doc.map(document => ({
        id: document.id,
        ... document.data()
    }))
    return dataFromFireStore
}

function ItemListContainer() {
    const [datos, setDatos] = useState([])
    const { idCategoria } = useParams();

    useEffect(() => {
            firestoreFetch()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategoria])

    return (
        <div>
            <ItemList items={datos}/>            
        </div>
    )
}

export default ItemListContainer
