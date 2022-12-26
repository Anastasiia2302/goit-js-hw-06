
const inputEl = document.querySelector("#name-input");
const outputSpanEl = document.querySelector("#name-output")


inputEl.addEventListener('input', onInputChange);


function onInputChange(event){


if (event.currentTarget.value !== ""){
    return outputSpanEl.textContent = event.currentTarget.value;
}
outputSpanEl.textContent = "Anonymous";

}