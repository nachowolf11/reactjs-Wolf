import { useEffect, useState } from "react";
import itemsPromise from "../utils/itemsPromise";
import ItemDetail from "./ItemDetail";
import { data } from "../data";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        itemsPromise(2000, data[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;