import {useState , useEffect} from "react"


function SearchPoke(key) {
    const [pokemon, setPokemon] = useState(null)
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${key}`)
        .then(response => response.json())
        .then(response => setPokemon(response))
        .catch(err => console.log(err))
    }, [])
    
    return pokemon
}

export default SearchPoke