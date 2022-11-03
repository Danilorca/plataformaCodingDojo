import React from 'react';
import { Link } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { simplePost } from '../services/simplePost';

const CreateProduct = () => {


  const crearProducto = async (values) =>{
    console.log("VAlores desde formik en vista producto", values)
    const response = await simplePost('http://localhost:8080/api/productos/new', values);
    console.log(response)
  }
  return (
    <div>
      <ProductForm
        titulo=""
        precio=""
        descripcion=""
        onSubmitProp={crearProducto}>
      </ProductForm>
      <button>
        <Link to={`/productos`} >PRODUCTOS CREADOS </Link>
      </button>
    </div>
  );
}

export default CreateProduct;
