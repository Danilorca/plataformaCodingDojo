import React from 'react';
import style from "./Home.module.css"

const Home = ({children}) => {
  return (
    <div className={style["container"]}>
      { children }
    </div>
  );
}

export default Home;
