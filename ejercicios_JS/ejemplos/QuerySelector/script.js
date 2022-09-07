let count = 1;
let countElement = document.querySelector("#count");

function sumar(){
  count ++;
  countElement.innerHTML= "La cuenta es " + count
  console.log(count)
}

function restar(){
  count --;
  countElement.innerHTML = "La cuenta es " + count;
  console.log(count)
}