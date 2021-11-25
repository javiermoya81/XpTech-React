
import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const BtnFinalizar = ()=>{

    return(
        <>
            <Link to={'/cart'} className="btn btn-outline-dark" >Finalizar</Link>
            <Link to={'/'} className="btn btn-outline-dark" >Seguir Comprando</Link>
        </>
    )
}

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(0)

    const {addCart, itemsCarrito} = useContext(CartContext)

    const onAdd = (contador)=>{
        setCantidad(contador)
        addCart({...item, 'cantidad':contador})
    }

    return (
        <div className='d-flex justify-content-center'>
            <div></div>
            <div className='card w-75 m-5 p-2'>
                <div>
                    <h3>{item.title}</h3>
                </div>
                <div>
                    <img src={item.pictureUrl} alt="imagen" />
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>$ {item.price}</p>
                </div>
            </div>
            <div>
                {cantidad === 0 ?
                    <ItemCount limite={1} stock={10} onAdd={onAdd} />
                :
                    <BtnFinalizar/>
                }
            </div>
            
            
        </div>
    )
}

export default ItemDetail
