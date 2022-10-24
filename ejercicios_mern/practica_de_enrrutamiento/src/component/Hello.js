import React from 'react';
import { useParams } from 'react-router-dom';

const Hello = () => {

  const {palabra, color, fondo}=useParams()
  return (
    <div>
      <h4 style={{backgroundColor: fondo, color:color }}>{palabra} </h4>
    </div>
  );
}

export default Hello;
