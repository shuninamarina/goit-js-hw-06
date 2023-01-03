const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = document.querySelector("#ingredients");

const createElem = ingredients.map((elem) => {
  const ingredientElem = document.createElement("li");
  ingredientElem.classList.add("item");
  ingredientElem.textContent = elem;

  return ingredientElem;
});

ingredient.append(...createElem);
