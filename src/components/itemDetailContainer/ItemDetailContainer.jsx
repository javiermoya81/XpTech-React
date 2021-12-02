import { useEffect, useState} from "react";
import { useParams } from "react-router";
import getFirestore from "../../service/getFirestore";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {itemId} = useParams()

  useEffect(() => {

    const dbItems = getFirestore()
    const queryCollection = dbItems.collection('items')

    queryCollection.doc(itemId).get()
    .then(resp=>setItem({id:resp.id,...resp.data()}))
    .catch(error => console.log('error:'+ error))
    .finally(()=>setLoading(false));
  }, [itemId]);

  return (
    <>
      <h2>Detalle de producto</h2>
      {loading ? <h3>Cargando detalle producto....</h3> : <ItemDetail item={item} />}
    </>
  );
}

export default ItemDetailContainer;
