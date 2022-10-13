import React, { useEffect, useState } from "react";
import {getAllPokemons} from "../services/service";

const Pokemon = () => {

  const [pokemons, setPokemons]= useState([]);
  const [click, setClick] = useState(false);

  const getPokemonsfromService = async() =>{
    try{
      const conseguirTodosPokemones = await getAllPokemons();
      console.log(conseguirTodosPokemones)
      setPokemons(conseguirTodosPokemones.results)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    if(click){
     getPokemonsfromService()
    }
  }, [click]);

  const handleClick = (e) =>{
    setClick(true)
    console.log(pokemons);
    console.log(e)
    console.log(e.target)
  }

  return (
    <div>
      <button onClick={handleClick}>Axios Pokemon</button>
      <ul>
      {pokemons.map((pokemon, index)=>{
        return(<li key={index}> {pokemon.name} </li> )
      })}
      </ul>
    </div>
  );
}
export default Pokemon;
