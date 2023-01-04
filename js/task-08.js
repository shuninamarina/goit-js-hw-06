const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitBtn);

function submitBtn(event) {
  event.preventDefault();

  const elements = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };

  const { email, password } = elements;

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  console.log(elements);
  event.currentTarget.reset();
}
