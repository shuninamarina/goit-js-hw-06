const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

const resizedFont = () => {
  textElem.style.fontSize = `${inputElem.value}px`;
};

inputElem.addEventListener("input", resizedFont);
