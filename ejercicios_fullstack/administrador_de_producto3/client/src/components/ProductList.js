import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';
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

  const eliminarProducto = async(id) =>{
    const response = await simpleDelete(`http://localhost:8080/api/productos/delete/${id}`)
    console.log(response.data)
    setProductos(productos.filter((producto)=>producto._id!==id))
  }

  return (
    <div>
      <h2>Lista de productos</h2>
      <button> <Link to={"/product/create/"} >CREAR PRODUCTO </Link> </button>
      <ul>
        {productos?.map((producto)=>
        <li key={producto._id}>
          <Link to={`/product/${producto._id}`} >{producto.titulo}</Link>
          <button onClick={()=>eliminarProducto(producto._id)} >X</button>
        </li> )}
      </ul>
    </div>
  );
}

export default ProductList;
