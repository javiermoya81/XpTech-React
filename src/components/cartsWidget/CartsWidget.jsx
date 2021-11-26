
import logo from '../../img/carrito.png'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './carrito.css'



const CartWidget = () =>{

    const {totalItemsCarrito} = useContext(CartContext)

    return(

        <div className='d-flex justify-content-center align-items-sm-center'>
            <img className='logoCarrito' src={logo} alt="carrito" />
            <div  className={(totalItemsCarrito!==0)?'bg-dark text-white displayCant':'d-none'}>
                <p className='mb-0'>{totalItemsCarrito}</p>
            </div>
        </div>   
    )
}
export default CartWidget;