/* ejercicio 1 */
console.log(hello);
var hello = "world";
// yo creo que lee
//var hello = "word";
//console.log(hello)
//quizás tbn lea esto:
//var hello;
//console.log(hello)
//hello=word

/* código reescrito */
var hello = "world";
console.log(hello);



/* ejercicio 2 */
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
//lee solo
//var needle = "magnet";

/* código reescrito */
var needle = "haystack";
function test() {
  var needle = "magnet";
  console.log(needle);
}
test();


/* ejercicio 3 */
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// yo creo que lee
// brendan = "only okay";
// console.log(brendan)
//al final leyó: super cool

/* código reescrito */
//Queda igual


/* ejercicio 4 */
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
//yo creo que lee
// var food = "chicken"
// food = "half-chicken"

/* código reescrito */

function eat() {
  var food = "chicken";
  console.log(food);
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
eat();



/* ejercicio 5 */
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
//yo creo que lee
//console.log(food) -> fish
//enrealidad no leyó nada, mean no es una función.

/* código reescrito */
//como el código no funcionaba, arreglé un poco el código para que funcionara.
function mean() {
  var food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};

mean();


/* ejercicio 6 */
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
//yo creo que lee
// var genre = "disco"
// enrrealidad lee
// undefined
// rock
// r&b
// disco

/* ejercicio 7 */

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

//yo creo que lee
// console.log (dojo)-> "san jose"
// console.log (dojo)-> "seattle"
// console.log (dojo)-> "burbank"
// console.log (dojo)-> "san jose"

/* código reescrito */

function learn() {
  dojo = "san jose";
  console.log(dojo);
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
  dojo = "san jose";
  console.log(dojo);
}
learn();



/* ejercicio 8 bonus ES6:const */
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
//yo creo que no lee porque dojo es un objeto y no se le puede atribuir un string.

/* código reescrito */

function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    //dojo.hiring = false;
    //console.log("closed for now")
    const dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
