const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...ingredients.map((item) => {
  let itemEl = document.createElement("li");
  itemEl.textContent = item;
  return itemEl;
}))

  

