import { useEffect, useState } from "react";
import itemsPromise from "../utils/itemsPromise";
import ItemDetail from "./ItemDetail";
import { data } from "../data";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        itemsPromise(2000, data.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;