const groceryList = Object.freeze([
  { "item": "carrots",           "haveIngredient": "constant language from-rainbow"> false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]);

//const needThyme = [...groceryList, { item: "thyme", haveIngredient: false }];
const needThyme = groceryList.concat([  { item: "thyme", haveIngredient: false }]);
//console.log(needThyme)

const gotTheThyme = [
  ...needThyme.slice(0, 5),
  { ...needThyme[5], haveIngredient: true },
];

const notNeceCelery = [...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3)];
//console.log(needThyme);

const items = Object.freeze([
  "carrots",
  "onions",
  "celery",
  "mushrooms",
  "butter",
  "thyme",
]);
console.log(items)
const sortedItems = [...items].sort();
console.log(sortedItems)
console.log(sortedItems.reverse())

const sortedGroceries = [...groceryList].sort((a, b) =>
  a.item > b.item ? 1 : -1
);
console.log(sortedGroceries)