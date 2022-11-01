import React, { useState } from 'react';
import { simplePost } from '../services/simplePost';
import ProductList from './ProductList';

const PackageForm = () => {

  const [product, setProduct] = useState();

  const handledOnChange = (e) => {
    setProduct({...product,[e.target.name]:e.target.value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    createProduct()
  }

  const createProduct = async () =>{
    const response = await simplePost("http://localhost:8080/api/productos/new", product)
    console.log(response.data)
  }

  return (
    <div className='card'>
      <form onSubmit={handleOnSubmit}>
        <h2>Productos</h2>
        <div>
          <label htmlFor='titulo' >Producto</label>
          <input type="text" name="titulo" onChange={handledOnChange} />
        </div>
        <div>
          <label htmlFor='precio'>Precio</label>
          <input type="number" name="precio" onChange={handledOnChange}/>
        </div>
        <div>
          <label htmlFor='descripcion'> Descripcion</label>
          <input type="text" name='descripcion' onChange={handledOnChange} />
        </div>
        <button  type='submit'>ENVIAR </button>

      </form>

      <ProductList></ProductList>
    </div>
  );
}

export default PackageForm;
