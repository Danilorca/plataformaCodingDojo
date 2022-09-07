const card1 = document.getElementById("likesCard1");
const card2 = document.getElementById("likesCard2");
const card3 = document.getElementById("likesCard3");
let countCard1= 9;
let countCard2= 12;
let countCard3= 9;

function meGusta1(){
 countCard1++;
 card1.innerText= countCard1 + " like(s)"
}

function meGusta2(){
  countCard2++;
  card2.innerText= countCard2 + " like(s)"
}

function meGusta3(){
  countCard3++;
    card3.innerText= countCard3 + " like(s)"
  }
