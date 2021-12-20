
import ItemCount from '../itemCount/ItemCount'
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const BtnFinalizar = ()=>{

    return(
        <>
            <Link to={'/cart'} className="btn btn-success" >Finalizar Compra</Link>
            <Link to={'/'} className="btn btn-warning" >Seguir Comprando</Link>
        </>
    )
}

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(0)

    const {addCart} = useContext(CartContext)

    const onAdd = (contador)=>{
        setCantidad(contador)
        addCart({...item, 'cantidad':contador, 'subtotal':0})
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='card w-75 m-5 p-2'>
                <div>
                    <h3>{item.title}</h3>
                </div>
                <div>
                    <img src={item.image} alt="imagen" />
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>$ {item.price}</p>
                </div>
            </div>
            {(item.stock<1)?
            ( 
                <div>
                    <p>Sin stock disponible</p>
                    <Link to={'/'} className="btn btn-info" >Volver al Inicio</Link>
                </div>
            )
        :
        (   <div>
            <div>
                <p>Stock Disponible {item.stock}</p>
            </div>
            <div>
                {cantidad === 0 ?
                <div>
                    <ItemCount limite={1} stock={item.stock} onAdd={onAdd} />
                    <Link to={'/'} className="btn btn-info mt-2" >Volver al Inicio</Link>
                </div>
                    
                :
                    <BtnFinalizar/>
                }
        </div>
        </div>)
        }
                        
            
        </div>
    )
}

export default ItemDetail
