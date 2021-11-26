
import { Link } from "react-router-dom"
import { useContext} from "react"
import { CartContext } from "../../context/CartContext"

const Cart = ()=>{
    
    const {itemsCarrito, totalCompra, removeCartItem} = useContext(CartContext)

    return(
        <>
            <h2 className='mt-5'>Carrito de compra</h2>

            {itemsCarrito.length !== 0 ? 
                <div>
                    <table className="table mt-5">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsCarrito.map(item => <tr key={item.id}>
                                <th scope="row">{item.id}</th>   
                                <td>{item.title}</td>
                                <td>$ {item.price}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.subtotal}</td>
                                <td><button>X</button></td>
                            </tr>)}
                        </tbody>
                        <tfoot>
                            <th colspan='4'>Total de la compra</th>
                            <th>{totalCompra}</th>
                        </tfoot>
                    </table>
                </div>
            :   
                <div>
                    <h4 className='m-5'>No hay productos en el carrito</h4>
                    <Link to={"/"} className="btn btn-info">Empeza tu compra!!!</Link>
                </div>
            }
            
        </>
    )
}
export default Cart