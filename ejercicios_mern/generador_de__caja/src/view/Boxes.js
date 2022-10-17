import React from 'react';
/* import styles from "./Boxes.module.css" */

const Boxes = ({boxes}) => {



  return (
    <div className="boxes">
      {boxes.map((box,index)=> <div className='box' key={index} style={{backgroundColor:box.color, width:parseInt(box.width), height:parseInt(box.height)}}>{box.color} </div>)}
    </div>
  );
}

export default Boxes;
