import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
  const [state, SetState]=useState(0);

  const [click, setClick]=useState(false);

  useEffect(()=>{
    console.log("Hello")
    if (click){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response=>{
        return response.json()
      })
      .then(response=>{
        SetState({
          people:response.results
        })
      })
    }
  },[click]);

  const handleClick=(e)=>{
    setClick(true)
    console.log(click)
    console.log(e);
    console.log(e.target);
  }



  return (
    <div>
      <button onClick={handleClick} >FETCH POKEMON</button>
      {state.people ? state.people.map((item, index)=>{

        return(<div key={index} >
            <p>{item.name}</p>
         </div>)
      }):null }
    </div>
  );
}

export default Pokemon;