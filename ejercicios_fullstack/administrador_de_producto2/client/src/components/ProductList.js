import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const ProductList = () => {


  const [productos, setProductos] = useState();

  const getProductos = async() =>{
    const response = await simpleGet("http://localhost:8080/api/productos")
    console.log(response.data.productos)
    setProductos(response.data.productos)
  }

  useEffect(() => {
    getProductos()
  }, []);

  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {productos?.map((producto)=>
        <li key={producto._id}>
          <Link to={`/product/${producto._id}`} >{producto.titulo}</Link>
        </li> )}
      </ul>
    </div>
  );
}

export default ProductList;
