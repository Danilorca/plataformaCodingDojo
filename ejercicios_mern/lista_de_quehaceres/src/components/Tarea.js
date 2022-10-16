import React, { useState } from 'react';

const Tarea = (props) => {

  const {description, id, eliminarTarea}=props;

  const [terminada, setTerminada] = useState(false);

  const cambiarEstado = (e)=>{
    setTerminada(e.target.checked);
  }

  return (
    <div>
      <h3 style={terminada?{textDecoration:"line-through"}:{textDecoration:"none"}} >{description}</h3>
      <input type="checkbox" onChange={cambiarEstado} />
      <button onClick={()=>eliminarTarea(id)}  >ELIMINAR TAREA</button>
    </div>
  );
}

export default Tarea;
