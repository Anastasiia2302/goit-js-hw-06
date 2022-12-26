const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredient = ingredients[0];

const arrayElements = ingredients.map(ingredient => {
  const newElement = document.createElement('li');
  newElement.textContent = ingredient;
  newElement.classList.add('item');

  return newElement;
});

const ingredientsRefs = document.querySelector('#ingredients');

ingredientsRefs.append(...arrayElements);

  

