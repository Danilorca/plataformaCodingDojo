/* cambiar la foto y el titulo */

let nombre = document.getElementById("name");
let foto = document.getElementById("avatar")
let direccion = document.getElementById("address")

function edit(){
 nombre.innerText= "Daniela Lorca";
 foto.src = "/images/Daniela_lorca_foto.png";
 direccion.innerText = "Valparaíso";
}


/* remover a los perfiles */


let perfilTodd = document.getElementById("user1");
let perfilPhil = document.getElementById("user2");
let contador = 2;
let descontar = document.getElementById("count")
let friends = 418;
let aumentar = document.getElementById("buddy")

function remove1(){
 perfilTodd.remove();
 contador--;
 descontar.innerHTML = contador;
}

function remove2(){
  perfilPhil.remove();
  contador--;
  descontar.innerHTML = contador;
}

function agree1(){
  friends++;
  aumentar.innerHTML = friends
}

function agree2() {
  friends++;
  aumentar.innerHTML = friends;
}