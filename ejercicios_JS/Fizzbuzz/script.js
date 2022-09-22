

/* imprimir numeros del 1 al 100
los números que sean multiplos de 3 impriman "Fizz"
Los números que sean multiplos de 5 impriman "Buzz"
Para los numeros que sean multiplos de 3 y 5 impriman "FizzBuzz"
Todos los demas numeros deben imprimirse normal
*/

//OJO EN COMO ORDENAR EL IF, NO ES LO MISMO PONER EL "Y" AL PRINCIPIO QUE AL FINAL.
/*   for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0)
      console.log("Fizz" );
    else if (i % 5 === 0)
      console.log("Buzz" );
    else if (i%3===0 && i%5===0)
     console.log("FizzBuzz" );
    else
      console.log(i)
  } */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 5 === 0) console.log("Buzz");
  else if (i % 3 === 0) console.log("Fizz");
  else console.log(i);
}








