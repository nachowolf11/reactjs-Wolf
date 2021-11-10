import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    return(
        <div className="container g-0">
            <div className="row justify-content-center g-0">
                {
                props.items.map((item,index) =>
                    <ItemList
                    key={index}
                    producto={item.producto}
                    precio={item.precio}
                    stock={item.stock}
                    />)
                }
            </div>
        </div>
    );
}

export default ItemListContainer;