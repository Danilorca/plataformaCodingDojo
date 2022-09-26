const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);


/* Una serie de objetos Pokémon donde la identificación es divisible por 3 */

const pokemonesDivisible = pokemon.filter(divisiblesPorTres);
//----->porque la coma del pokemon, id?
function divisiblesPorTres(pokemon,id){
  return pokemon,id % 3 === 0;
}
//console.log(pokemonesDivisible);

/* Una serie de objetos Pokémon que son del tipo "fuego" */
//----->se puede hacer una búsqueda por 2 indices [0],[1] ejemplo de abajo?
const pokemonesFuego = pokemon.filter(pokemon => pokemon.types[0]=== "fire" || pokemon.types[1] === "fire")
//console.log(pokemonesFuego);


/* Una variedad de objetos Pokémon que tienen más de un tipo */
// ---->como podría hacer un pokemon.types de más de 2 elementos?
const pokemonesConTipos = pokemon.filter(pokemon => pokemon.types.length === 2)
//console.log(pokemonesConTipos)

/* Una matriz con solo los nombres de los Pokémon */
const nombrePokemon = pokemon.map(pokemon => pokemon.name);
//console.log(nombrePokemon)

/* Una matriz con solo los nombres de Pokémon con una identificación mayor que 99 */
const pokemonConIdentificacion = pokemon.filter(pokemon => pokemon.id> 99)
const pokemonNameIdentificacion = pokemonConIdentificacion.map(pokemon => pokemon.name)
//console.log(pokemonConIdentificacion);
//console.log(pokemonNameIdentificacion);

/* Una matriz con solo los nombres del pokémon cuyo único tipo es veneno */
const pokemonesVenenosos = pokemon.filter(pokemon => pokemon.types[0] === "poison" || pokemon.types[1]==="poison" );
//console.log(pokemonesVenenosos)

/* Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador" */
const pokemonesVoladores = pokemon.filter(
  (pokemon) => pokemon.types[1] === "flying"
);
//console.log(pokemonesVoladores)