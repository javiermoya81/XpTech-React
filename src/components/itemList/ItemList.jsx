
import {memo} from 'react'
import Item from '../item/Item'

const ItemList = memo(({products})=>{
    return (
        <>
            <div className="container">
                <div className="row">
                        {products.map((product)=> <Item key={product.id} product={product}/>)}
                </div>
            </div>
            

            
        </>
    )
    
})

export default ItemList
