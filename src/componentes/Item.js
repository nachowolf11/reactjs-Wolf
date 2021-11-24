import ItemCount from "./ItemCount";

const Item = (props) => {
    return(
    <>
    <div className="card m-2" style={{width: 280}}>
        <img src={props.img} class="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Nombre: {props.nombre.toUpperCase()}</h5>
            <p className="card-text">ID: {props.id}</p>
        </div>
        <ItemCount stock={props.stock}/>
    </div>
    </>
    );
}

export default Item;