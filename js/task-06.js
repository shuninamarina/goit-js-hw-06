const inputElem = document.querySelector("#validation-input");
const inputLength = Number(inputElem.dataset.length);

const handleInputElemBlur = () => {
  if (inputElem.value.length === inputLength) {
    inputElem.classList.remove("invalid");
    inputElem.classList.add("valid");
  } else {
    inputElem.classList.remove("valid");
    inputElem.classList.add("invalid");
  }
};

inputElem.addEventListener("blur", handleInputElemBlur);
