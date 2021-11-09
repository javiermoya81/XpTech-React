import {useState} from 'react'

const ItemCount = ({limite, stock, onAdd}) => {
    const [contador, SetContador] = useState(limite);

    const sumarUnidad = ()=>{
        if(contador < stock) SetContador(contador+1) 
    }

    const restarUnidad = ()=>{
        if(contador > limite) SetContador(contador-1)
    }

    const btnOnAdd = ()=>{
        onAdd(contador);
        SetContador(limite);
    }

    return(
        
        <div>
            <div>
                <h3 className="btn border border-dark">Placa video</h3>
            </div>
            <button className='btn btn-outline-success' onClick = {sumarUnidad}>+</button>
            <lavel className="btn border border-info">{contador}</lavel>
            <button className="btn btn-outline-danger" onClick = {restarUnidad}>-</button>
            <button className="btn btn-outline-dark" onClick={btnOnAdd}>Agregar</button>
        </div>
    )
}
export default ItemCount