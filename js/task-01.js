const categoriesElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach((category) => {
  const titleElem = category.querySelector("h2");
  const listElem = titleElem.nextElementSibling.children;

  console.log(`Category: ${titleElem.textContent}`);
  console.log(`Elements: ${listElem.length}`);
});
