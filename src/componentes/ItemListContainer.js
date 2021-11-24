import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import ItemList from './ItemList'

function ItemListContainer() {
    let listado = []
    const [pokemones, setPokemones] = useState([])

    /*useEffect(() => {
         fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(err => console.log(err))
    }, [])
*/
    useEffect(()=>{
        for (let index = 1; index < 5; index++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(response => response.json())
            .then(response => listado.push(response))
            .then (()=> console.log(listado.length))
            .catch(err => console.log(err))
        }
        setTimeout(() => {
            setPokemones(listado)
        }, 10000);
    },[])



    return (
        <div>
            <ItemList pokemones={pokemones}/>           
        </div>
    )
}

export default ItemListContainer
