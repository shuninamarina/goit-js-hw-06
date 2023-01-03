const nameInputElem = document.querySelector("#name-input");
const nameOutputElem = document.querySelector("#name-output");

nameInputElem.addEventListener("input", () => {
  if (nameInputElem.value !== "") {
    nameOutputElem.textContent = nameInputElem.value;
  } else {
    nameOutputElem.textContent = "Anonymous";
  }
});
