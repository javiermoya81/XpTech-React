
import { createContext, useState } from "react";

export const CartContext = createContext([])

//Funcion para verificar si el item ya se agrego al carrito y no repetir
function controlRepetido(array, item) {
    return array.some(element => element.id === item.id)
}

const CartContextProvider = ({children}) =>{

    const [itemsCarrito, setItemsCarrito] = useState([])

    const [totalItemsCarrito, setTotalItemsCarrito] = useState(0)

    const [totalCompra, setTotalCompra] = useState(0)

    const addCart = (item) => {

        const ingresado = controlRepetido(itemsCarrito, item)

        if (ingresado) 
        {
            alert('Producto ya ingresado. Se sumaron unidades')
            itemsCarrito.forEach(element =>{
                if(element.id === item.id){
                    element.cantidad += item.cantidad 
                }
                element.subtotal = element.cantidad*element.price
            })
            setItemsCarrito(itemsCarrito)
            let total = 0
            itemsCarrito.forEach(element=> total += element.subtotal )
            setTotalCompra(total)
        }
        else{
            item.subtotal = item.cantidad*item.price
            setItemsCarrito([...itemsCarrito, item])
            setTotalCompra(totalCompra+item.subtotal)
        }

        setTotalItemsCarrito(totalItemsCarrito + item.cantidad)
    }
    
    return(
        <CartContext.Provider value={{itemsCarrito,totalItemsCarrito, totalCompra, addCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider