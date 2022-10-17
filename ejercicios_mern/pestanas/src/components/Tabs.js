import React, { useState } from 'react';
import style from "./Tabs.module.css"
import "./Tabs.css"

const Tabs = () => {

  const [tabs, setTabs] = useState([

    {
      title:"Tab 1",
      content:"Soy la primera pestaña",
      state:"active"
    },
    {
      title:"Tab 2",
      content:"Soy la segunda pestaña",
      state:""
    },
    {
      title:" Tab 3",
      content:"Soy la tercera pestaña",
      state:""
    }
  ]);

  const changeActive = (tabElegida, i) =>{
    const newTabs = tabs.map(tab =>{
      tab.title === tabElegida.title ? tab.state="active": tab.state="";
      return tab;
    })
    setTabs(newTabs)
  }
  return (
  <div className={style["tabcontainer"]}>
    <div className={style['titles']}>
        {tabs.map((tab,i)=>{
        return (<div key={i} className={style[tab.state]} onClick={()=>changeActive(tab,i)}>{tab.title} </div>)
      })}
    </div>
    <div className='content'>
      {tabs.filter(item=>item.state==="active").map((item,index)=><p key={index}> {item.content} </p>)}
    </div>
  </div>
  );
}

export default Tabs;
