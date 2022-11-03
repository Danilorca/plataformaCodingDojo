import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';

const UpdateProduct = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [editProducto, setEditProducto] = useState();

  const mostrarUnProducto = async()=>{
    const response = await simpleGet("http://localhost:8080/api/productos/"+id)
    setEditProducto(response.data.productos)
  }

  const editarProducto = async(values) =>{
    const response = await simplePut("http://localhost:8080/api/productos/editar/"+id, values)
    navigate("/")
  }

  useEffect(() => {
    mostrarUnProducto()
  }, []);

  return (
    <div>
      <h2>Actualizar productos de id: {id} </h2>
      {editProducto &&
      <ProductForm
      titulo = {editProducto.titulo}
      precio = {editProducto.precio}
      descripcion = { editProducto.descripcion}
      onSubmitProp = {editarProducto}
      >
      </ProductForm>
      }

    </div>
  );
}

export default UpdateProduct;
