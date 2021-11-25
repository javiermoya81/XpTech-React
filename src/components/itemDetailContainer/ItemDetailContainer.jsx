import { useEffect, useState} from "react";
import { useParams } from "react-router";
import ItemDetail from "../itemDetail/ItemDetail";


const items = [
  { id: 1, title: 'Monitor', description: "Monitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget neque at urna lacinia fermentum et iaculis ante.", price: 10000, pictureUrl: 'https://as2.ftcdn.net/v2/jpg/00/88/39/67/1000_F_88396727_84yG00kCfyfVfzr2XQJy1pbQi2UIf2Pd.jpg', categoria:'monitor' },
  { id: 2, title: 'Teclado',description: "Teclado Lorem ipsum dolor sit amet, consectetur adipiscing elit. " ,price: 4500, pictureUrl: 'http://www.lpnk.com.ar/Temp/App_WebSite/App_PictureFiles/Items/NSKBGZ2_800.jpg', categoria:'teclado'},
  { id: 3, title: 'Mouse',description:"Mouse Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 1200, pictureUrl: 'https://as2.ftcdn.net/v2/jpg/01/17/97/99/1000_F_117979929_3VlL6QY4uBLub7h2oswDWOKrIeZvmzdg.jpg', categoria:'mouse' }
]

const getItems = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 5000);
});

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(true);
  
  const {itemId} = useParams()

  useEffect(() => {
    getItems
      .then((resp) =>{
        setItem(resp.find(item => item.id === parseInt(itemId))) 
      })
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
