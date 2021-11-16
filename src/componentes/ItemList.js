import Item from "./Item";

const ItemList = (props) => {
    return(
        <div className="container g-0">
            <div className="row justify-content-center g-0">
                {
                props.items.map((item,index) =>
                    <Item
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

export default ItemList;