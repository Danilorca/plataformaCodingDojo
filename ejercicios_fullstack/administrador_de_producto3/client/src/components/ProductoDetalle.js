import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';
import { simpleGet } from '../services/simpleGet';

const ProductoDetalle = () => {

  const {id} = useParams()

  const navegar = useNavigate()

  const [oneProducto, setOneProducto] = useState();

  const readOneProducto = async() =>{
    const response = await simpleGet(`http://localhost:8080/api/productos/${id}`)
    console.log(response.data.productos)
    setOneProducto(response.data.productos)
  }

  useEffect(() => {
    readOneProducto()
  }, []);

  const eliminarProducto = async() =>{
    const response = await simpleDelete(`http://localhost:8080/api/productos/delete/${id}`)
    console.log(response.data)
    navegar("/")
  }

  return (
    <div>
      <h2>Producto específico: {id}</h2>
      <p>{oneProducto?.titulo} </p>
      <p>{oneProducto?.precio} </p>
      <p>{oneProducto?.descripcion} </p>

      <button><Link to={`/product/update/${id}`} >Actualizar</Link> </button>
      <button onClick={()=>eliminarProducto()} >Eliminar producto</button>
    </div>
  );
}

export default ProductoDetalle;
