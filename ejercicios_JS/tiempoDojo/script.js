
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
let todayMinimaF= (18*108+32);

let tomorrowMaximaC= 27;
let tomorrowMinimaC= 19;
let tomorrowMaximaF= (27*1.8+32);
let tomorrowMinimaF= (19*1.8+32);

let fridayMaximaC= 21;
let fridayMinimaC= 16;
let fridayMaximaF= (21*1.8+32);
let fridayMinimaF= (16*1.9+32);

let saturdayMaximaC= 26;
let saturdayMinimaC= 21;
let saturdayMaximaF= (26*1.8+32);
let satudayMinimaF= (21*1.8+32)

function cambiarTemperatura(cardToday) {
  console.log("funciona!");
  cardToday.innerHTML = `
  <h2 class="maxima">${todayMaximaF}°</h2>
  <h2 class="minima">${todayMinimaF}°</h2>
  `;
}