
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = ()=>{

    const {itemsCarrito} = useContext(CartContext)

    return(
        <>
            <h2>Carrito de compra</h2>

            {itemsCarrito.length !== 0 ? 
                <div>
                    <ul>
                        {itemsCarrito.map(item => <li key={item.id}>{item.title} {item.price} {item.cantidad} </li>)}
                    </ul>
                </div>
            :
                <h3>No hay productos en el carrito</h3>
            }
            
        </>
    )
}
export default Cart