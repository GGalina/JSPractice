function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const {inputEl, createBtnEl, destroyBtnEl, boxesContainerEl} = {
  inputEl: document.querySelector('[type="number"]'),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  boxesContainerEl: document.querySelector("#boxes"),
};

createBtnEl.addEventListener(`click`, createBoxes);
destroyBtnEl.addEventListener(`click`, destroyBoxes);

function createBoxes() {
  const amount = parseInt(inputEl.value);
  const dimension = 30;
  const arrayBoxes = [];
  
  if ( amount < 1 || amount > 100) {  //alert if number is out of range
     alert("Enter a number between 1 and 100");
  } else {
    for (let i = 0; i < amount; i += 1) { // for every number
      const newDiv = document.createElement(`div`); // create element div element
      newDiv.style.backgroundColor = getRandomHexColor(); //gives random HEX background color
      newDiv.style.display = 'block';
      newDiv.style.height = dimension + (i * 10) +'px'; // each element after the first one is 10px wider
      newDiv.style.width = dimension + (i * 10) + 'px'; // each element after the first one is 10px higher 
      arrayBoxes.push(newDiv);
    }
    boxesContainerEl.append(...arrayBoxes);
  }
};

function destroyBoxes() { //remove all created elements
  boxesContainerEl.querySelectorAll("div").forEach(divItem => divItem.remove());
};