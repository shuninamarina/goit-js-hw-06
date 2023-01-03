const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const inc = () => {
  console.log((counterValue += 1));
  valueEl.innerHTML = counterValue;
};

const dec = () => {
  console.log((counterValue -= 1));
  valueEl.innerHTML = counterValue;
};

decrementEl.addEventListener("click", dec);
incrementEl.addEventListener("click", inc);
