import ItemCount from "./ItemCount";

const ItemList = (props) => {
    return(
    <>
    <div className="card m-2" style={{width: 320}}>
        <img src="#" class="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{props.producto}</h5>
            <p className="card-text">Precio: ${props.precio}</p>
            <p className="card-text">Stock: {props.stock}</p>
        </div>
        <ItemCount stock={props.stock}/>
    </div>
    </>
    );
}

export default ItemList;