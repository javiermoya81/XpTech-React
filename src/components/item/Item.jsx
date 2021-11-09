import React from "react";

const Item = ({product})=>{
    return(
        < div className="d-flex justify-content-center">
            <div id={product.id} className="card w-25 mt-4">
                <img src={product.pictureUrl} className="card-img-top" alt="imagen producto"/>
                <div class="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>$ {product.price}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    )
}
export default Item