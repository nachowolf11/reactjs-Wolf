function SearchPoke(listado) {
    for (let index = 1; index < 5; index++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(response => response.json())
        .then(response => listado.push(response))
        .then (()=> console.log(listado.length))
        .catch(err => console.log(err))
    }
    
    return listado
}

export default SearchPoke