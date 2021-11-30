import {Link} from "react-router-dom"

const Item = (props) => {
    return(
    <div className="card m-2" style={{width: 320}}>
        <img src={props.imagen} class="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{props.producto}</h5>
            <p className="card-text">Precio: ${props.precio}</p>
            <p className="card-text">Stock: {props.stock}</p>
            <Link to={`/item/${props.id}`}>Detalles</Link>
        </div>
    </div>
    );
}

export default Item;