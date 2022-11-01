import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const ProductoDetalle = () => {

  const {id} = useParams()

  const [oneProducto, setOneProducto] = useState();

  const readOneProducto = async() =>{
    const response = await simpleGet(`http://localhost:8080/api/productos/${id}`)
    console.log(response.data.productos)
    setOneProducto(response.data.productos)
  }

  useEffect(() => {
    readOneProducto()
  }, []);

  return (
    <div>
      <h2>Producto específico: {id}</h2>

      <p>{oneProducto?.titulo} </p>
      <p>{oneProducto?.precio} </p>
      <p>{oneProducto?.descripcion} </p>

    </div>
  );
}

export default ProductoDetalle;
