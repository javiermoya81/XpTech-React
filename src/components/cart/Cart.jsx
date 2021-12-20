import { Link } from "react-router-dom";
import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import Modal from '../modal/Modal'
import firebase from "firebase";
import "firebase/firestore";
import getFirestore from "../../service/getFirestore";

const Cart = () => {

  const { itemsCarrito, totalCompra, deleteCartItem, deleteCart } = useContext(CartContext);

  const [buyerData, setBuyerData] = useState({name:'', email:'', phone:''});
  const [idOrder, setIdOrder] = useState('')

  const handleInputChange = (event) => {
    setBuyerData({
        ...buyerData,
        [event.target.name] : event.target.value
    })
  }

  const crearOrdenCompra = (e) => {
    e.preventDefault();

    const ordenCompra = {
      buyer: buyerData,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      items: itemsCarrito.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.cantidad,
      })),
      total: totalCompra,
    };
    
    const dbItems = getFirestore();
    const queryCollectionOrders = dbItems.collection("orders");

    queryCollectionOrders
      .add(ordenCompra)
      .then((resp) => setIdOrder(resp.id))
      .catch((err) => console.log(err))
      .finally();

    // Actualizacion de stock
    const stockItemsToUpdate = dbItems.collection("items").where(
      firebase.firestore.FieldPath.documentId(),"in",itemsCarrito.map((i) => i.id)
    );

    const batch = dbItems.batch();

    stockItemsToUpdate.get()
    .then((collection) => {
        collection.docs.forEach((doc) => {
            batch.update(doc.ref, {
                stock:doc.data().stock - itemsCarrito.find((item) => item.id === doc.id).cantidad,
            });
        });
        batch.commit().then((resp) => {console.log("actualizado")});
    });

    deleteCart()
  };

  return (
    <>
      <h2 className="mt-2">Carrito de compra</h2>

      {itemsCarrito.length !== 0 ? (

        <div className="mt-5">
          <h3>Ingrese sus datos</h3>

          <form action="" className="mt-5">

            <label htmlFor="name">Nombre y Apellido</label>
            <input type="text" onChange={handleInputChange} name="name" id="name"/>

            <label htmlFor="phone">Telefono</label>
            <input type="number" onChange={handleInputChange} name="phone" id="phone"  />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleInputChange} name="email" id="email" />

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
                {itemsCarrito.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                    <td>{item.cantidad}</td>
                    <td>$ {item.subtotal}</td>
                    <td>
                      <button id={item.id} onClick={(e) => deleteCartItem(e)}>
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <th colspan="4">Total de la compra</th>
                <th>${totalCompra}</th>
              </tfoot>
            </table>
            {((buyerData.name && buyerData.email && buyerData.phone)!=='') ? (
            <input className="btn btn-success btn-lg mb-2" type="submit" value="Comprar" onClick={(e)=>crearOrdenCompra(e)} data-bs-toggle="modal" data-bs-target="#orderModal"/>
            ):
            (<p className="btn-danger">Para finalizar la compra complete sus datos</p>)
            }
          </form>
          
          <Link to={"/"} className="btn btn-primary btn-sm">Volver al inicio</Link>
          <button className="btn btn-danger btn-sm" onClick={deleteCart}>Limpiar Carrito</button>
        </div>
      ) : 
      (
        <div>
          <h4 className="m-5">No hay productos en el carrito</h4>
          <Link to={"/"} className="btn btn-info">Empeza tu compra!!!</Link>
        </div>
      )
      }
      <Modal id="orderModal" buyerName={buyerData.name} idOrder={idOrder} />
    </>
  );
};
export default Cart;
