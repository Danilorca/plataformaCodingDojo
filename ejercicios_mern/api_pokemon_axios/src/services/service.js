const axios = require('axios').default;

export const getAllPokemons = async () =>{
  const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  console.log(pokemons)
  return pokemons.data;
}