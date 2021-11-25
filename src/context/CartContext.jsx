
import { createContext, useState } from "react";

export const CartContext = createContext([])

//Funcion para verificar si el item ya se agrego al carrito y no repetir
function controlRepetido(array, item) {
    return array.some(element => element.id === item.id)
}

const CartContextProvider = ({children}) =>{

    const [itemsCarrito, setItemsCarrito] = useState([])

    const addCart = (item) => {

        const ingresado = controlRepetido(itemsCarrito, item)

        ingresado ?
            alert('Ya ingresado')
        :
            setItemsCarrito([...itemsCarrito, item])
    }
    console.log(itemsCarrito)

    
    return(
        <CartContext.Provider value={{itemsCarrito, addCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider