
import React from 'react'
import Item from '../item/Item'

const ItemList = ({products})=>{
    return (
        <>
            <div className='d-flex justify-content-between m-5'>
                {products.map((product)=> <Item key={product.id} product={product}/>)}
            </div>
            
        </>
    )
}

export default ItemList
