const {backgroundEl, changeBtnEl, colorEl} = {
  backgroundEl: document.querySelector(`body`),
  changeBtnEl: document.querySelector(`[type="button"]`),
  colorEl: document.querySelector(`.color`)
}

changeBtnEl.addEventListener(`click`, onChangeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  let color = getRandomHexColor();
  backgroundEl.style.backgroundColor = color; //set background color
  colorEl.textContent = color; //set value for span element
};