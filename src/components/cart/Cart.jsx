
import { Link } from "react-router-dom"
import { useContext,  useState} from "react"
import { CartContext } from "../../context/CartContext"
import getFirestore from "../../service/getFirestore"

const Cart = ()=>{
    
    const {itemsCarrito, totalCompra, removeCartItem} = useContext(CartContext)

    const [buyerData, setBuyerData] = useState({name:'Javier', phone:'111111111',email:'javier@mail.com'})

    
    const crearOrdenCompra = (e)=>{
        //e.preventDefault()

        const ordenCompra={
            buyer:buyerData,
            items:itemsCarrito.map(item=>({id:item.id, title:item.title, price:item.price, quantity:item.cantidad})),
            total: totalCompra
        }

        const dbItems = getFirestore()
        const queryCollectionOrders = dbItems.collection('orders')

        queryCollectionOrders.add(ordenCompra)
        .then(resp =>alert(`Se genero su orden de compra id ${resp.id}`))
        .catch(err => console.log(err))
        .finally()

        //return ordenCompra
        console.log(ordenCompra)
    }


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
                    <button onClick={crearOrdenCompra}>Comprar</button>
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