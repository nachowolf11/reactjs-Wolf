import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, cantidad) => {
        let found = cartList.find(producto => producto.idItem === item.id)
        if (found === undefined){
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    nombreItem: item.producto,
                    precioItem: item.precio,
                    cantItem: cantidad
                }
            ]);
        }else{
            found.cantItem += cantidad
        }
    }

    const limpiarCart = () => {
        setCartList([])
    }

    const borrarItem = (id) => {
        let resultado = cartList.filter(item  => item.idItem != id)
        setCartList(resultado)
    }

    return (
        <CartContext.Provider value={{cartList,addToCart,limpiarCart,borrarItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider