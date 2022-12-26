
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("fill in all fields");
  }
  const objectUser = {Email:email.value, Password: password.value}
  console.log(objectUser);
event.currentTarget.reset();
}