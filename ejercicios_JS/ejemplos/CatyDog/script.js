let animalImg= document.querySelector("#animalitos");



function pickCat(element){
  element.style.backgroundColor= "violet" //cambiar el stylo del CSS, pero solo de un elemento
  element.style.border = "none";
  animalImg.src = "cat.jpg";

}

function pickDog(element) {
  animalImg.src = "dog.jpg"
  element.classList.add("btn") //cambia el stylo del css, pero atribuyéndole una clase con muchos elementos.

}