const ItemCarrito = ({imagen,producto,cantidad,precio,children}) => {
    return (
        <div className="border border-secondary p-3">
            <h2>{producto}</h2>
            <div>CANTIDAD: {cantidad}</div>
            <div>PRECIO: {precio}</div>
            <div>SUBTOTAL: {precio*cantidad}</div>
            {children}
        </div>
    );
}

export default ItemCarrito