import React from 'react';
import style from "./PersonCard.module.css"

const PersonCard = (props) => {
 const {firstName, lastName, age, hairColor}=props;
  return (
    <div className={style.container}>
      <h2> {lastName} {firstName} </h2>
      <p> Age: {age} </p>
      <p>HairColor: {hairColor} </p>
    </div>
  );
}

export default PersonCard;
