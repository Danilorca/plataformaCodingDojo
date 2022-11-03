import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonEliminate from '../components/ButtonEliminate';
/* import { simpleDelete } from '../services/simpleDelete'; */
import { simpleGet } from '../services/simpleGet';

const GetProduct = () => {

  const [productos, setProductos] = useState();


  const mostrarProductos = async () =>{
    const response = await simpleGet("http://localhost:8080/api/productos")
    console.log(response.data.productos)
    setProductos(response.data.productos)
  }

  useEffect(() => {
    mostrarProductos()
  }, []);

  //Hasta acá llega como mostrar todos los productos

  //La función eliminar producto puede ir acá o en el detalle

  /* const eliminarProducto = async(id) => {
    const response = await simpleDelete("http://localhost:8080/api/productos/delete/"+id)
    setProducto(producto.filter((products)=> products._id!==id))
    //mostrarProductos()
  } */

  return (
    <div>
      <ul>
        {productos?.map((producto, _id)=>
        <li key={producto._id}>
        {producto.titulo}
        $ {producto.precio}
        {producto.descripcion}
        <button>
          <Link to={`/productos/${producto._id}`}>
          Editar producto
          </Link>
        </button>

        <ButtonEliminate id={producto._id} setProductoProps={setProductos} productoProps= {productos}/>
        {/* <button onClick={()=>eliminarProducto(producto._id)} > Eliminar </button> */}
        </li> )}

      </ul>
      <button>
      <Link to={`/`} >CREAR UN PRODUCTO </Link>
      </button>
    </div>
  );
}

export default GetProduct;
