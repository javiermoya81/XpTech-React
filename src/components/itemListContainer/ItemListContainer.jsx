
import {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import ItemList	 from '../itemList/ItemList'

const productos = [
  { id: 1, title: 'Monitor', price: 10000, pictureUrl: 'https://as2.ftcdn.net/v2/jpg/00/88/39/67/1000_F_88396727_84yG00kCfyfVfzr2XQJy1pbQi2UIf2Pd.jpg', categoria:'monitor' },
  { id: 2, title: 'Teclado', price: 4500, pictureUrl: 'http://www.lpnk.com.ar/Temp/App_WebSite/App_PictureFiles/Items/NSKBGZ2_800.jpg', categoria:'teclado'},
  { id: 3, title: 'Mouse', price: 1200, pictureUrl: 'https://as2.ftcdn.net/v2/jpg/01/17/97/99/1000_F_117979929_3VlL6QY4uBLub7h2oswDWOKrIeZvmzdg.jpg', categoria:'mouse' }
]

const llamadaDB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos)
  }, 2000)
})

const ItemListContainer = ({greeting}) => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams() 

  useEffect(() => {
    
    if(categoryId){
      llamadaDB
      .then((respuesta)=>{
        setProduct(respuesta.filter(item => item.categoria === categoryId))
      })
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
    }
    else{
      llamadaDB
      .then((respuesta)=>{
        setProduct(respuesta)
      })
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
    }
  }, [categoryId])

  return (
    <div>
      <h1>XpTech - eCommerce</h1>
      <p>{greeting}</p>
      {loading ? <button className="btn btn-primary m-5" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Cargando productos...
                  </button> : <ItemList products={products}/> }
    </div>
  );
};

export default ItemListContainer;
