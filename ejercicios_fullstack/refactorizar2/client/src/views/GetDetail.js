import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ButtonEliminate from '../components/ButtonEliminate';
import { simpleGet } from '../services/simpleGet';

const GetDetail = () => {

  const {id} = useParams()

  //const navigate = useNavigate()
  const [producto, setProducto] = useState()


  const mostrarUnProducto = async()=>{
    const response = await simpleGet("http://localhost:8080/api/productos/"+id)
    console.log(response.data.productos)
    setProducto(response.data.productos)
  }

  useEffect(() => {
    mostrarUnProducto()
  }, []);



  return (
    <div>
      <p> Detalle producto id: {producto?._id} </p>
      <p> Nombre del producto: {producto?.titulo} </p>
      <p> Precio del producto: $ {producto?.precio} </p>
      <p> Descripcion del producto: {producto?.descripcion} </p>
      <button>
      <Link to={`/productos/editar/${id}`} >EDITAR PRODUCTO </Link>
      </button>
      <ButtonEliminate id={producto?._id} />
      <button>
      <Link to={`/productos/`} >VOLVER ATRÁS </Link>
      </button>
    </div>
  );
}

export default GetDetail;
