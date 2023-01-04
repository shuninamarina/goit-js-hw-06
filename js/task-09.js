function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackground = document.querySelector("body");
const changeBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeBtn.addEventListener("click", () => {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyBackground.style.backgroundColor;
});
