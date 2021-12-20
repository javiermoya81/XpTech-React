import { Link } from "react-router-dom";

const Modal = ({buyerName, totalCompra, idOrder})=> {

    return (
        
        <div>
            <div className="modal fade" id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    { idOrder ? (
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Gracias por su compra!!!</h5>
                            </div>
                            <div className="modal-body">
                                <p>Cliente {buyerName} su compra se registro con exito</p>
                                <p>Id orden de compra {idOrder}</p>
                                <p>Guarde el id para futuras consultas y/o reclamos</p>
                            </div>
                            <div className="modal-footer">
                                <Link to={'/'}>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Volver al Home</button>
                                </Link>
                            </div>
                        </div>
                    ):
                    (
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>Cargando datos de la compra....</p>
                            </div>
                        </div>
                    )}  
                </div>
            </div> 
            
        </div>
    )
}
export default Modal;