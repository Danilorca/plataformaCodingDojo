import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';

const ProductoEditado = () => {

  const {id}= useParams();

  const navigate = useNavigate()

  const [productoEditado, setProductoEditado] = useState();

  const productoEdit = async () =>{
    const response= await simplePut(`http://localhost:8080/api/productos/update/${id}`,productoEditado)
    console.log(response.data)
  }

  const obtenerUnProducto = async() =>{
    const response = await simpleGet(`http://localhost:8080/api/productos/${id}`)
    console.log(response.data.productos)
    setProductoEditado(response.data.productos)
  }

  useEffect(() => {
    obtenerUnProducto()
  }, []);

  const handledOnChange = (e) => {
    setProductoEditado({...productoEditado,[e.target.name]:e.target.value})
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    productoEdit()
    navigate("/")
  }

  return (
    <div>
      <h2>Producto Editado</h2>

      <form onSubmit={handleOnSubmit}>
        <h2>Productos</h2>
        <div>
          <label htmlFor='titulo' >Producto</label>
          <input type="text" name="titulo" onChange={handledOnChange} value={productoEditado?.titulo} />
        </div>
        <div>
          <label htmlFor='precio'>Precio</label>
          <input type="number" name="precio" onChange={handledOnChange} value={productoEditado?.precio}  />
        </div>
        <div>
          <label htmlFor='descripcion'> Descripcion</label>
          <input type="text" name='descripcion' onChange={handledOnChange} value={productoEditado?.descripcion}  />
        </div>
        <button  type='submit'>ENVIAR </button>

      </form>



    </div>
  );
}

export default ProductoEditado;
