
import React from 'react'

function ItemDetail({item}) {
    return (
        <div className='d-flex justify-content-center'>
            <div className='card w-75 m-5 p-2'>
                <div>
                    <h3>{item.title}</h3>
                </div>
                <div>
                    <img src={item.pictureUrl} />
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>$ {item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
