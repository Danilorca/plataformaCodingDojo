
/* alerta cuando se pulsa la ciudad */

function alerta(){
  alert("Cargando información meteorológica...")
}

alerta()

/* borrar mensaje de cookie */

let cookies = document.getElementById("mensajeCookies");

function aceptarCookies(){
  cookies.remove();
}

/* cambiar la temperatura de Celsius a Farenheit
formula   ºF = ºC x 1.8 + 32. */

let todayMaximaC= 24;
let todayMinimaC= 18;
let todayMaximaF= (24*1.8+32);
let todayMinimaF= (18*1.8+32);

let tomorrowMaximaC= 27;
let tomorrowMinimaC= 19;
let tomorrowMaximaF= (27*1.8+32);
let tomorrowMinimaF= (19*1.8+32);

let fridayMaximaC= 21;
let fridayMinimaC= 16;
let fridayMaximaF= ((21*1.8)+32);
let fridayMinimaF= (16*1.8+32);

let saturdayMaximaC= 26;
let saturdayMinimaC= 21;
let saturdayMaximaF= (26*1.8+32);
let saturdayMinimaF= (21*1.8+32);

let selectTemperatura = document.getElementById("select-temperatura");
let cardToday = document.getElementById ("cardToday");
let cardTomorrow = document.getElementById("cardTomorrow");
let cardFriday = document.getElementById("cardFriday");
let cardSaturday = document.getElementById("cardSaturday");

console.log(saturdayMinimaF)
function cambiarTemperatura() {
  if(selectTemperatura.value === "F"){
    cardToday.innerHTML = `
    <h2 class="maxima">${todayMaximaF}°</h2>
    <h2 class="minima">${todayMinimaF}°</h2>
    `;
  } else {
    cardToday.innerHTML = `
    <h2 class="maxima">${todayMaximaC}°</h2>
    <h2 class="minima">${todayMinimaC}°</h2>
    `;
  }
  //cardTomorrow
  if(selectTemperatura.value === "F"){
    cardTomorrow.innerHTML = `
    <h2 class="maxima">${tomorrowMaximaF}°</h2>
    <h2 class="minima">${tomorrowMinimaF}°</h2>
    `;
  } else {
    cardTomorrow.innerHTML =`
    <h2 class="maxima">${tomorrowMaximaC}°</h2>
    <h2 class="minima">${tomorrowMinimaC}°</h2>
    `
  }
  //cardFriday
  if(selectTemperatura.value === "F"){
    cardFriday.innerHTML = `
    <h2 class="maxima">${fridayMaximaF.toFixed(1)}°</h2>
    <h2 class="minima">${fridayMinimaF}°</h2>
    `;
  } else {
    cardFriday.innerHTML = `
    <h2 class="maxima">${fridayMaximaC}°</h2>
    <h2 class="minima">${fridayMinimaC}°</h2>
    `;
  }
  //cardSaturday
  if(selectTemperatura.value === "F"){
    cardSaturday.innerHTML = `
    <h2 class="maxima">${saturdayMaximaF.toFixed(1)}°</h2>
    <h2 class="minima">${saturdayMinimaF.toFixed(1)}°</h2>
    `;
  } else {
    cardSaturday.innerHTML = `
    <h2 class="maxima">${saturdayMaximaC}°</h2>
    <h2 class="minima">${saturdayMinimaC}°</h2>
    `;
  }
}