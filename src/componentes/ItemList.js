import Item from "./Item";

const ItemList = (props) => {
    return(
        <div className="container g-0">
            <div className="row justify-content-center g-0">
                {
                props.pokemones.map((pokemon,index) =>
                    <Item
                    key={index}
                    img={pokemon.sprites.front_default}
                    nombre={pokemon.name}
                    id={index+1}
                    stock={10}
                    />)
                }
            </div>
        </div>
    );
}

export default ItemList;