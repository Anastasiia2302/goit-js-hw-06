
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 const bodyEl = document.querySelector("body");
 const spanColor = document.querySelector(".color")
 const btnColor = document.querySelector(".change-color");
 
 btnColor.addEventListener("click", changeColor);

 function changeColor () {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  bodyEl.style.backgroundColor = color;
  console.log(spanColor);
 }
