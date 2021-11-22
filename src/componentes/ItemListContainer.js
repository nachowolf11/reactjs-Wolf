import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import ItemList from './ItemList'

function ItemListContainer() {
    let listado = []
    const [pokemon, setPokemon] = useState([])

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
            .catch(err => console.log(err))
        }
    },[pokemon])
    console.log(listado)
    setPokemon(listado)
    return (
        <div>
            <ItemList pokemones={pokemon}/>            
        </div>
    )
}

export default ItemListContainer
