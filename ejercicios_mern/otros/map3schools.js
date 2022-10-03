const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}

const nombreCompleto = persons.map(getFullName)
console.log(nombreCompleto);


//otra manera de hacerlo

const persons1 = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

persons1.map(nombreUnido);

function nombreUnido(item) {
  return `${item.firstname} ${item.lastname} `;
}

const nombreCompleto1= persons1.map(nombreUnido)
console.log(nombreCompleto1)


//filter
const ages = [32, 33, 16, 40, 10, 5, 25];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result)






