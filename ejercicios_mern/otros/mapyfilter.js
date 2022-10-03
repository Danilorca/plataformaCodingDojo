//.map
/*
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map((item) => `<li>${item}</li>`);
console.log(groceryList)

const values = [1, 2, 3, 4, 5];
const cubes = values.map((val) => val ** 3);
console.log(cubes)
 */



//.filter


const values = [1, 2, 3, 4, 5];
const evens = values.filter((val) => val % 2 === 0); //devuelve solo los pares
const lua = values.filter((val) => val % 2 !== 0); //devuelve los impares
console.log(evens);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter((item) => item.includes("o"));//devuelve los palabras que tienen "o"
console.log(oFoods)

const valores = [1, 2, 3, 4, 5];
const oddCubes = valores.filter((val) => val % 2 !== 0).map((val) => val ** 3);//filtra solo los valores impares(1,3,5) y luego devuelve cada número al cubo (1,27,125)
console.log(oddCubes)

