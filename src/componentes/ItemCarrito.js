const ItemCarrito = (props) => {
    return (
        <div>
            <img src={props.imagen}/>
            <h2>{props.producto}</h2>
            <span>{props.cantidad}</span>
            <span>{props.precio}</span>
        </div>
    );
}

export default ItemCarrito