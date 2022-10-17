import React, { useState } from 'react';
/* import styles from "./BoxForm.module.css" */

const BoxForm = (props) => {

  const {boxes, setBoxes}=props;

  const [boxInfo, setBoxInfo] = useState({
    color:"",
    width:"",
    height:""
  });

  const onChange = (e) =>{
    setBoxInfo({
      ...boxInfo,
      [e.target.name]:e.target.value
    })
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    setBoxes([ boxInfo, ...boxes])
  }



  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input type="color" name="color" onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="width">Ancho</label>
          <input type="number" name="width" onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="height">Alto</label>
          <input type="number" name="height" onChange={onChange}/>
        </div>
        <input type="submit" value="Agregar Caja" />
      </form>
    </div>
  );
}

export default BoxForm;
