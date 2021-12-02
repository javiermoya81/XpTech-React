import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getFirestore from "../../service/getFirestore";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {

    const dbItems = getFirestore()
    const queryCollection = dbItems.collection('items')

    if(categoryId){
      queryCollection.where('categoryId', '==', categoryId).get()
      .then(resp =>setProduct(resp.docs.map(prod=>({id:prod.id,...prod.data()}))))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    } else{
      queryCollection.get()
      .then(resp =>setProduct(resp.docs.map(prod=>({id:prod.id,...prod.data()}))))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div>
      <h1>XpTech - eCommerce</h1>
      <p>{greeting}</p>
      {loading ? (
        <button className="btn btn-primary m-5" type="button" disabled>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Cargando productos...
        </button>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
