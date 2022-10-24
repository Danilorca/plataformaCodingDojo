import React from 'react';
import { useParams } from 'react-router-dom';

const Numero = () => {

  const { id } = useParams()
  return (
    <div>
      {
         isNaN(+id)?
         <h3>La palabra es: { id }</h3>
         :
         <h3>El número es: { id }</h3>
      }
     {/*  <h3 >Lo que se escribe en el url del navegador es: {id} </h3> */}
    </div>
  );
}

export default Numero;
